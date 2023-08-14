import _ from "lodash";
import fs from "fs";
import { promisify } from "util";
const appendFile = promisify(fs.appendFile);
async function appendFile1() {
    try {
      const textDatAppend = await appendFile("./results.txt");
      return textDatAppend;
    } catch (err) {
      throw err;
    }
  }
const readFileAsync = promisify(fs.readFile);
async function returnFile() {
  try {
    const textData = await readFileAsync("./data.txt");
    return textData;
  } catch (err) {
    throw err;
  }
}
async function text() {
  try {
    const textData = await returnFile();
    console.log(textData.toString());
  } catch (error) {
    console.error(error);
  }
}

async function lengthText() {
  try {
    const textData = await returnFile();
    console.log(_.words(textData).length);
  } catch (error) {
    console.error(error);
  }
}

async function reverseArray() {
  try {
    const textData = await returnFile();
    console.log(_.reverse(textData).toString());
  } catch (error) {
    console.error(error);
  }
}

async function noDoubleWords() {
  try {
    const textData = await returnFile();
    let textData1 = _.words(textData);
    console.log(_.uniq(textData1).toString());
  } catch (error) {
    console.error(error);
  }
}

async function noDoubleWordsSum() {
  try {
    const textData = await returnFile();
    const textData1 = _.words(textData);
    console.log(_.uniq(textData1).length);
  } catch (error) {
    console.error(error);
  }
}

async function toUpperCase() {
  try {
    const textData = await returnFile();
    let textData1 = _.words(textData);
    textData1 = _.uniq(textData1);
    console.log(_.toUpper(textData1));
    const textDataAppend = await appendFile1();
    textDataAppend(_.toUpper(textData1))
  } catch (error) {
    console.error(error);
  }
}

async function toUpperCaseGT5() {
  try {
    const textData = await returnFile();
    let textData1 = _.words(textData);
    textData1 = _.uniq(textData1);
    for (let i = 0; i < textData1.length; i++) {
      if (!_.gt(5, textData1[i].length)) {
        console.log(_.toUpper(textData1[i]));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

async function toUpperCaseSumvowels() {
  try {
    const textData = await returnFile();
    let textData1 = _.words(textData);
    textData1 = _.uniq(textData1);

    for (let i = 0; i < textData1.length; i++) {
      let counter = 0;
      if (
        _.includes(textData1[i], "v") ||
        _.includes(textData1[i], "o") ||
        _.includes(textData1[i], "w") ||
        _.includes(textData1[i], "e") ||
        _.includes(textData1[i], "l") ||
        _.includes(textData1[i], "s")
      ) {
        for (let j = 0; j < textData1[i].length; j++) {
          switch (textData1[i][j]) {
            case "v":
              counter++;
              break;
            case "o":
              counter++;
              break;
            case "w":
              counter++;
              break;
            case "e":
              counter++;
              break;
            case "l":
              counter++;
              break;
            case "s":
              counter++;
              break;
          }
        }
        console.log("word: " + textData1[i] + " vowelCount:  " + counter);
        counter = 0;
      }
    }
  } catch (error) {
    console.error(error);
  }
}



toUpperCase();
