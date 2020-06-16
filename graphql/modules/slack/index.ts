import { objectType } from "@nexus/schema";
import { createChannel, getAllChannels } from "../../slack";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const SLACK_SIGNUP_URL = publicRuntimeConfig?.SLACK_SIGNUP_URL;
const SLACK_DOMAIN = publicRuntimeConfig?.SLACK_DOMAIN;
const hasSlack = !!SLACK_SIGNUP_URL && !!SLACK_DOMAIN;

export const SlackConversation = objectType({
  name: "SlackConversation",

  definition(t) {
    t.string("id");
    t.field("url", {
      type: "String",
      resolve({ id }) {
        return `https://${SLACK_DOMAIN}.slack.com/archives/${id}`;
      },
    });
  },
});

export const resolveSlackChannel = async ({
  isTopic = false,
  team,
  prisma,
}) => {
  if (!hasSlack) return null;

  const teamId = team.id;
  const slackId = (team as any).slackId;

  if (slackId) {
    return { id: slackId };
  } else {
    const channelName = isTopic
      ? "topic-channel-" + teamId
      : "team-channel-" + teamId;

    // try creating the channel
    const result = await createChannel(channelName);
    let newId = result.channel?.id;

    if (!result.ok) {
      // check if it already exists
      newId = (await getAllChannels())?.find((c) => c.name === channelName)?.id;
      if (!newId) {
        console.warn(
          "could not create Slack channel, then could not find it",
          channelName,
          result,
        );
        return null;
      }
    }

    if (isTopic) {
      await prisma.hackerTopic.update({
        where: { id: teamId },
        data: {
          slackId: newId,
        },
      });
    } else {
      await prisma.team.update({
        where: { id: teamId },
        data: {
          slackId: newId,
        },
      });
    }
    return {
      id: newId,
    };
  }
};
