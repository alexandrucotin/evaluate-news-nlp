import { checkForUrl } from "./urlChecker";

test("Checking...", () => {
  expect(checkForUrl("https://www.udacity.com/")).toBe(true);
  expect(checkForUrl("Alex")).toBe(false);
});
