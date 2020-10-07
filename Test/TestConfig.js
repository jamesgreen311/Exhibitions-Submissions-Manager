function testConfig() {
    //console.log(getExhibitInfo("765E5EB0"));
    let exhibit = getExhibitInfo("6E074B39");
    console.log(`Name: ${exhibit.exhibitName}, Max Entries Per Artist: ${exhibit.maxEntriesPerArtist}, Max Entries Per Show: ${exhibit.maxEntriesPerShow}, Image Folder Id: ${exhibit.imageFolderId}`)
}