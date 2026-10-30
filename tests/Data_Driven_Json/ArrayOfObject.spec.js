import {test} from "@playwright/test"
import fs from "fs"
let data=fs.readFileSync("C:/Users/acer/OneDrive/Desktop/Playwright/Test_Data/ArrayOfObject.json")
 data=JSON.parse(data)
 test("Array of objects in json", async({page})=>{
    for(let ele of data1)
    {
        console.log(ele);
    }
 })