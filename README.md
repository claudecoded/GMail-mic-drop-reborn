# Gmail Mic Drop Reborn 😂 ![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=flat&logo=gmail&logoColor=white)

A modern, highly resilient Chrome/Edge Extension reinstatement of Google's infamous **2016 April Fools' Day "Mic Drop"** easter egg for Gmail.

If you don't know what this easter egg is, I explain to you. Back in April 2016, Goolge added a easter-egg on GMail services that, for every e-mail that you send, a Minion GIF was automatically delivered with your e-mail. Ha ha haa, what can be wrong... right? But, obviously lots of people clicked that button without knowing of the easter-egg - resulting in entire "legions" of Minion GIFs in matters that simply shouldn't have minions; since hospital diagnosis and companies documents - resulting in lots of people being even FIRED - all because of a stupid Minion GIF you didn't even want to send.

So, back to the repo, this extension safely injects the custom button alongside your standard controls, drops the iconic Minion GIF, and triggers the send workflow seamlessly.

## How to Install and Test
1. **Clone/Download** this repository to your local directory.
2. Ensure you have two square PNG images inside an `icons` folder named `icon16.png` and `icon48.png` (you can use any standard placeholder icons).
3. Open your browser and navigate to `chrome://extensions/` (or `edge://extensions/`).
4. Toggle **"Developer mode"** on (top-right).
5. Click **"Load unpacked"** (top-left) and select the root folder of this project.
6. Open or reload [Gmail](https://google.com), click **Compose**, and look for the red **"Send + Mic Drop"** button!

## ⚠️ The one essential detail to avoid breaking it:

The browser will refuse to load the extension if the `icons/` folder is missing or empty.
