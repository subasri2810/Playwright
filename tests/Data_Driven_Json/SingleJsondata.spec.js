import {test} from "@playwright/test"
import fs from "fs"
let data=fs.readFileSync("C:/Users/acer/OneDrive/Desktop/Playwright/Test_Data/singledata.json")
 data=JSON.parse(data)
let url=data.url;
let username=data.Username;
let password=data.Password;
test("Single data from json", async()=>
{
   await page.goto(url)
   await page.locator("#username").fill(username)
   await page.locator("#password").fill(password)
   await page.locator("#submit").click()
   await page.waitForTimeout(3000)
})