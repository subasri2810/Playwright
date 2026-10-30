import {test} from "@playwright/test"
import fs from "fs"
let data=fs.readFileSync("C:/Users/acer/OneDrive/Desktop/Playwright/Test_Data/ArrayOfMultipleObject.json")
 let data1=JSON.parse(data)
 test("Array of objects in json", async({page})=>{
    for(let ele of data1)
    {
   await page.goto(ele.url)
   await page.locator("#username").fill(ele.username)
   await page.locator("#password").fill(ele.pass)
   await page.locator("#submit").click()
   await page.waitForTimeout(3000)
        console.log(ele);
    }
 })