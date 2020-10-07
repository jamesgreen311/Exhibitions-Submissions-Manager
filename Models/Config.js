const config = ds.getSheetByName("Config");

/*
Target Config Sheet retrieved as config in privateSettings.js
*/

Config = {
  showId: "a2:a",
  exhibitName: "b2:b",
  closeDate: "d2:d",
  maxEntriesPerShow: "e2:e",
  maxEntriesPerArtist: "f2:f",
  imageFolderId: "g2:g",
  showIdCol: 1,
  exhibitNameCol: 2
}

function getShowIds() {
    return config.getRange(Config.showId).getValues();
}

/* 
@Returns an array of arrays from spreadsheet
 */
function getShowNames() {
    return config.getRange(2, Config.showIdCol, config.getLastRow()-1, Config.exhibitNameCol).getValues();
}

function getExhibitNameById(id) {
  return getExhibitInfo(id).exhibitName;
  
  //return showName;
}

function getExhibitInfo(id) {
  let allExhibits = config.getRange(2, Config.showIdCol, config.getLastRow()-1, 7).getValues();
  //console.log(allExhibits);
  let exhibitInfo = {};
  //let badId = `Show Id ${id} not found`;
  let exhibit404 = {
    exhibitName: "Bad Id",
    maxEntriesPerArtist: 0,
    maxEntriesPerShow: 0,
    imageFolderId: null
  }

  for (s=0; s<allExhibits.length; s++) {
    if (allExhibits[s][0] == id) {
      exhibitInfo.exhibitName = allExhibits[s][1];
      exhibitInfo.maxEntriesPerArtist = allExhibits[s][4];
      exhibitInfo.maxEntriesPerShow = allExhibits[s][5];
      exhibitInfo.imageFolderId = allExhibits[s][6];
      return exhibitInfo;
    }
  }
  return exhibit404;
}