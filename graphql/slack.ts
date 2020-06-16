import fetch from "node-fetch";
import { objectType } from "@nexus/schema";
import memoize from "memoizee";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
// authorizes the versusVirus App to operate
const token = publicRuntimeConfig?.SLACK_TOKEN;

const headers = {
  "Content-Type": "application/json; charset=utf-8",
  Authorization: `Bearer ${token}`,
};
export const createChannel = async (name: string) => {
  const body = {
    name,
  };

  return fetch("https://slack.com/api/conversations.create", {
    method: "POST",
    body: JSON.stringify(body),
    headers,
  }).then((r) => r.json());
};

export const getAllChannels = memoize(
  async () => {
    let alChannels = [];
    let hasMore = true;
    let cursor = null;
    while (hasMore) {
      const body = {
        limit: 100,
        cursor,
      };

      const { channels = [], response_metadata } = await fetch(
        "https://slack.com/api/conversations.list" +
          (cursor ? "?cursor=" + cursor : ""),
        {
          method: "POST",
          body: JSON.stringify(body),
          headers,
        },
      ).then((r) => r.json());
      alChannels = [...alChannels, ...channels];

      if (response_metadata?.next_cursor) {
        hasMore = true;
        cursor = response_metadata.next_cursor;
      } else {
        hasMore = false;
      }
    }

    //console.log(alChannels);
    return alChannels;
  },
  { promise: true, maxAge: 120000 },
);
/*
// post message in a channel
request.post(
  {
    url: "https://slack.com/api/chat.postMessage",
    form: {
      token,
      channel: channelName,
      text:
        "@channel VersusVirus is inviting you to join a live session in https://youtube.com/wefwefwef",
      parse: "full"
    }
  },
  (err, httpResponse, body) => {
    if (err) {
      console.error(err);
    } else {
      console.log(body);
    }
  }
);
*/
