import { blockItems } from "./block-items";
import { createPlayerMini } from "./mini-player";
//

export function createBlockInfo(a, b) {
  const blockInfo = document.querySelector(".info");
  blockInfo.innerHTML ="";
  const blockContainer = document.createElement("div");
  blockContainer.className = "info__header";
  blockInfo.append(blockContainer);
  const blockImg = document.createElement("div");
  blockImg.className = "info__header-img";
  blockImg.innerHTML =`<img src="${blockItems[a][b].simg}"></img>`;
  blockContainer.append(blockImg);
  const blockNames = document.createElement("div");
  blockNames.classList.add("info__header-names", "names");
  blockContainer.append(blockNames);
  const groupName = document.createElement("h2");
  groupName.className = "names__title";
  groupName.innerText = `${blockItems[a][b].name}`;
  blockNames.append(groupName);
  const groupSound = document.createElement("p");
  groupSound.className = "names__sound";
  groupSound.innerText = `${blockItems[a][b].sound}`;
  blockNames.append(groupSound);

  // добавить плеер--------------------
  const miniPlayer = document.querySelector(".names");
  createPlayerMini(blockNames, a, b);
//--------------------------------


  const blockDescription = document.createElement("div");
  blockDescription.className = "info__main";
  blockInfo.append(blockDescription);

  const description = document.createElement("p");
  description.innerHTML = `${blockItems[a][b].description}`;
  blockDescription.append(description);
}