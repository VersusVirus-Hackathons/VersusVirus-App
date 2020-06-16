import schedule from "./schedule";
import challenges from "./challenges";
import users from "./users";
import mentors from "./mentors";
import hackerSkills from "./hackerSkills";
import hackerTopics from "./hackerTopic";
import hackerTypes from "./hackerType";

export const seed = async () => {
  await users();
  await schedule();
  await hackerSkills();
  await hackerTypes();
  await hackerTopics();
  await mentors();
  await challenges();
};
