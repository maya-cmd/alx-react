import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";


test.only("returns current year", () => {
  const expectedYear = new Date().getFullYear();
  expect(getFullYear()).toBe(expectedYear);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent Requirement</strong> - complete by EOD");
});