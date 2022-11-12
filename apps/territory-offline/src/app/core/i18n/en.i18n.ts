export const en = {
  language: "Language",
  common: {
    shareNotAvailable:
      "Unfortunately sharing is not available on this platform. The text is copied to the clipboard.",
    ignore: "Ignore",
    choose: "Please select",
    nothingChosen: "Nothing selected",
    skip: "Skip",
    color: "Color",
    opacity: "Opacity",
    create: "Create",
  },
  assignments: {
    startTime: "Start time",
    endTime: "End time",
    sendToPublisher: "Send territory to publisher",
    delete: "Delete assignment",
    add: "+ New Assignment",
    unkown: "Unknown",
    edit: "Edit Assignment",
    digitalTerritory: "Digital Territory",
    sharingFailed: "File sharing failed",
    new: "New Assignment",
    body: "Hallo {{firstName}},\n\n in the attachment you will find your new territory!",
    return: "Do you want to give this territory back?",
    returnFromFieldCompanion:
      "Do you want to give this territory {{key}} {{name}} back?",
    proceed: "Do you want to report this territory as processed?",
    title: "Assignment",
  },
  overdueAssigments: {
    startTime: "Issue date",
    endTime: "Return date",
    hasSince: "Owned since",
    edit: "Edit assignment",
    shareOverdueFirstSentence:
      "According to my notes you have the following territories:",
    shareOverdueLastSentence: "When did you last edit them?",
  },
  congregation: {
    name: "Name",
    language: "Language",
    duplicate: "Duplicate this congregation",
    delete: "Delete congregation",
    use: "Manage this congregation",
    lastDoing: "Last doings",
    noLastDoings: "Nothing has happened yet.",
    add: "New congregation",
    territories: "Territories",
    reallyDuplicate: "Do you really want to copy this congregation?",
    reallyDelete: "Do you really want to delete this congregation?",
  },
  territory: {
    title: "Territory",
    toKml: "Export to KML",
    fromKml: "Import from KML",
    populationCount: "Population count",
    publishers: "Publisher",
    allVisitBans: "Not visit",
    add: "New territory",
    filter: "Filter",
    inProcessing: "In process",
    processed: "Processed",
    assign: "Assign",
    reasignDue: "Due assignment",
    none: "You have no territories yet!",
    noneMessage: "Create or import territories to manage them.",
    location: "Location",
    number: "Number",
    units: "Units",
    comment: "Comment",
    tags: "Tags",
    print: {
      title: "Print territory",
      format: "Format",
      editLook: "Edit appearance",
      name: "Territory name",
      number: "Territory number",
      units: "Population count",
      comment: "Comment",
      cuttingMarks: "Cutting marks",
      compass: "Compass",
      resetCompass: "Reset compass",
      autoAlign: "Align territory automatically",
      saveAlignment: "Remember orientation for this card",
      flipCard: "Flip card",
      visitBans: "Not visit",
      visitBanBell: "Name / Bell",
      visitBanDate: "Date",
      streetList: "List of streets",
      streets: "Streets",
      address: "Address",
      alignmentSaved: "The orientation has been saved!",
    },
    send: "Send territory to publisher",
    currentAssignment: "Current assignment",
    publisher: "Publisher",
    unkownPublisher: "Unknown",
    startTime: "Start time",
    processedAssignment: "Edit assignment",
    assignment: "Assignments",
    visitBans: "Not visit addresses",
    streets: "Streets",
    addStreet: "Add street",
    delete: "Delete territory",
    noDrawing:
      "No drawing available! To save you have to draw area boundaries on the map.",
    pipeNone: "Not available",
    streetAlreadyExist: "The street {{street}} is already there!",
    reallyRemoveStreet: "Do you really want to delete {{{street}}?",
    reallyDelete: "Do you really want to delete this territory?",
  },
  dashboard: {
    serviceYear: "Service year",
    processed: "Territories edited",
    PopulationCountProcessed: "Edited population count",
    assignments: "Assigned territories",
    overdueAssignments: "Overdue assignments",
    noOverdueAssignments: "Great! There are no overdue assignments.",
    overdueTerritories: "Overdue Territories",
    noOverdueTerritories: "Great! There are no overdue territories.",
  },
  configuration: {
    mapOrigin: "Align map here",
    passwordLine1: "Please enter the name of your",
    passwordLine2: "congregation and set up a password,",
    passwordLine3: "that you can remember very well.",
    welcomeLine2: "by Territory Offline!",
    welcomeLine1: "Welcome",
    passwordNotSame: "The passwords must be the same.",
    territoryLocation: "Where is your territory?",
    moveMap: "Please move the map to the centre of your area.",
    congregation: "Meeting",
    password: "Password",
    repeatPassword: "Password repeat",
  },
  lockScreen: {
    messageLine1: "Territory Offline",
    messageLine2: "is locked!",
    enterPassword: "Input password",
    unlock: "Unlock app",
    decryptPublishers: "Publishers are decrypted......",
    decryptTerritories: "Territories are decrypted...",
    decryptAssignments: "Assignments are decrypted...",
    decryptAddresses: "Not visits are decrypted...",
    decryptTags: "Tags are decrypted......",
    decryptDrawings: "Drawings are decrypted...",
    decryptCongregations: "Congregations are decrypted...",
  },
  publisher: {
    title: "Publisher",
    name: "Name",
    firstName: "Surname",
    mail: "Email",
    phone: "Phone",
    dsgvo: "DSGVO",
    tags: "Tags",
    assignments: "Assigned territories",
    noAssignments: "No assigned territories",
    delete: "Delete publisher",
    dsgvoMessage:
      "After reading the privacy policy, you can give your consent here. Please sign in the box.",
    add: "New Publisher",
    none: "You have no publisher yet!",
    noneMessage:
      "Create or import publishers in order to be able to assign territories to them.",
    reallyDelete: "Do you really want to delete this publisher?",
    canNotDelete:
      "{{{firstName}}} {{{name}} has still assigned territories and can therefore not be deleted.",
  },
  settings: {
    general: "General",
    processingDueAfter: "Processing due after",
    dueMonth: "{{count}} months",
    processingDueHintLine1:
      "This period determines how long the processing of an area should take.",
    processingDueHintLine2:
      'If this period is exceeded, the territory is displayed in the dashboard in the "Processing due" section.',
    reassignAfter: "Reallocate by",
    hint: "Hint",
    reassignAfterHintLine1:
      "This period determines how long an territory should be left fallow.",
    reassignAfterHintLine2:
      "If this period is exceeded, the territory is coloured yellow/orange on the map.",
    reassignDueAfter: "Assignment due after",
    reassignDueAfterHintLine1:
      "This period determines when an area should definitely be worked.",
    reassignDueAfterHintLine2:
      'If this period is exceeded, the area is displayed in the "Territory due" section of the dashboard.',
    version: "Version",
    versionAvailable: "Version {{version}} available",
    territories: "Territories",
    alignMap: "Align map",
    security: "Security",
    changePassword: "Change password",
    autoLock: "Lock automatically",
    lockApp: "Lock app",
    lockAppCmd: "shift + cmd + L",
    lockMinutes: "{{count}} Min",
    lockNever: "Never",
    reset: "Delete all data",
    support: "Support developer",
    about: "About the App",
    contact: "Contact",
    alreadyLatestVersion: "You have the latest version.",
    errorOccured:
      "An error has occurred. Please try again later or go to our website: https://territory-offline.com",
    reallyReset: "Do you really want to delete everything?",
    restartApp: "Please restart the app.",
  },
  title: "Territory Offline",
  visitBan: {
    noAdresses: "No address found",
    setMark: "Set marker in territory",
    reset: "Reset",
    setManually: "Place address manually",
    comment: "Comment",
    lastVisit: "Last visit",
    delete: "Delete address",
    notTerritoryReference:
      "This address does not refer to any territory. You need to geocode it again...",
    retry: "Try again!",
    title: "Not visit",
    sort: "Sort order",
    sortAlphabetical: "Alphabetical",
    noAdressesHint: "You have no addresses yet!",
    noAdressesHintDescription: "Create or import addresses to manage them.",
    add: "New Address",
    street: "Street",
    editAdress: "Edit address",
    name: "Name",
    address: "Address",
    reallyDelete: "Do you really want to delete this address?",
    noTerritoryMapped:
      "The marking cannot be assigned to any territory. Please place a marker on a territory.",
    multipleTerritories:
      "Error - ambiguity! The marking is on {{{count}} territories ({{{territories}}). Please make sure that the territory drawings do not overlap.",
    noName: "No name",
    today: "Enter today",
  },
  transfer: {
    sync: {
      title: "Synchronize",
      import: "Import data",
      export: "Send data",
    },
    returnTerritory: "Return territory",
    returnTerritoryFromFieldCompanion: "File from Field Companion",
    export: {
      title: "Export",
      publisher: "Publisher",
      firstName: "First name",
      lastName: "Last name",
      mail: "E-Mail",
      phone: "Phone",
      territories: "Territories",
      number: "Number",
      name: "Designation",
      visitBans: "Not visit",
      level: "Floor",
      street: "Street",
      numberShort: "No.",
      city: "City",
      lastVisit: "Last visit",
      comment: "Comment",
      latitude: "Latitude",
      longitude: "Longitude",
      territoryState: "State of territory",
      monthNotProceed: "Months not processed",
      yearsNotProceed: "Years not processed",
      bellPosition: "Bell position",
      noTerritories: "There are no territories to export!",
      populationCount: "Adress count",
      lastReturnDate: "Last doing on",
      lastPublisher: "Last publisher",
      currentlyAssignedSince: "Currently assigned since",
      currentPublisher: "Currently assigned to",
    },
    exportBackup: "Backup file",
    exportS13: "PDF: S13 form",
    exportKML: "KML: Complete map",
    exportVisitBans: "EXCEL: Not visit adderess",
    exportPublishers: "EXCEL: Publisher",
    exportTerritoryNames: "EXCEL: Territories",
    exportTerritoryState: "EXCEL: Territory state",
    importFromTerritoryHelper: "Territory Helper",
    importFromTerritoryWeb: "Territory Web",
    importFromApp: "Import from apps",
    importFromExcel: "Import from excel",
    importVisitBans: "Not visit addresses",
    importPublishers: "Publisher",
    territoryHelper: {
      headLine1: "Import your data",
      headLine2: "from TerritoryHelper",
      infoLine1: "If your assembly has been using TerritoryHelper",
      infoLine2: "you can simply save your data in TerritoryOffline",
      infoLine3: "take over. Select the appropriate files",
      infoLine4: "- we do the rest!",
      publishers: "Publisher",
      territories: "Territories",
      assignments: "Assignments",
      optional: "optional",
      visitBans: "Not visit",
      import: "Import",
    },
    importExcel: {
      cancel: "Cancel",
      continue: "Continue",
      fileType: "Data type",
      chooseFile: "Choose file",
      mapData: "Map data",
      mapDataInfo:
        "Unfortunately we do not know how you have structured your table. Therefore, the next thing you will see are the titles of all columns found in your file. Please assign the respective column to the data type we are looking for.",
      next: "Next",
      import: "Import",
      verify: "Please check if the columns are assigned correctly.",
      override: "Should existing data be updated?",
      foundSheets: "Found sheets",
      foundColumns: "Found columns",
      mappedColumns: "Assigned columns",
      success: "Successfully Imported",
      failures: "The following entries could not be imported",
      successMessage:
        "The unattended addresses of your meeting have been imported and are now available for you to process.",
      chooseSheets:
        "Please choose in which of the <strong>sheets</strong> your data is",
      chooseNameColumns:
        "Please select in which of the columns the <strong>names</strong> are.",
      chooseStreetColumn:
        "Please select in which of the columns the <strong>street</strong> are.",
      chooseHouseNumberColumn:
        "Please select in which of the columns the <strong>street number</strong> are.",
      chooseCitiesColumn:
        "Please select in which of the columns the <strong>citry</strong> are.",
      chooseLatitudeColumn:
        "Please select in which of the columns the <strong>latitude</strong> are.",
      chooseLongitudeColumn:
        "Please select in which of the columns the <strong>longitude</strong> are.",
      chooseCommentColumn:
        "Please select in which of the columns the <strong>comments</strong> are.",
      chooseLastVisitColumn:
        "Please select in which of the columns the <strong>last visits</strong> are.",
      visitBanCols: {
        name: "Name",
        street: "Street",
        streetSuffix: "Street number",
        city: "City",
        latitude: "Latitude",
        longitude: "Longitude",
        comment: "Comment",
        lastVisit: "Last visit",
        creationTime: "Creation time",
      },
      skipped: "Skipped",
    },
    import: {
      title: "Import",
      geoJson: "GEO Json",
      geoJsonDesc:
        "The GEO Json format may have property fields that you may also want to import. These fields can take a value:",
      geoJsonDesc2: "You can assign these properties:",
      start: "Data import begins...",
      tags: "Tags are imported...",
      visitBans: "Not visits are imported...",
      publishers: "Publisher are imported...",
      ok: "ok",
      assignments: "Assignments are imported...",
      territories: "Territories are imported...",
      drawings: "Drawings are imported...",
      noBackup: "The file does not appear to be a backup.",
      column: "Column",
      noExcelFile: "{{file}} seems not to be an Excel file!",
      wrongFileType: "Wrong file type! Please enter an Excel file.",
      noJsonFile: "Wrong file type! Please enter a JSON file.",
      importTWTerritories: "Territory Web - Territories",
    },
    exportGroupOverseerReport: "For group overseer",
  },
  tag: {
    edit: "Edit",
    ready: "Done",
    new: "NEW",
    none: "You have no tags yet!",
    noneMessage:
      "Create new tags to group areas, preachers or non-visiting addresses.",
    assigned: "Tags",
    add: "Add tag",
    previewNone: "No tags",
    alreadyExist: "Tag with the name {{name}} already exists!",
    reallyDelete: "Do you really want to delete this day?",
    removeAllReferences:
      "This tag is used. If you delete it, it will be removed from all records.",
  },
  action: {
    cancel: "Cancel",
    back: "Back",
    next: "Next",
    edit: "Edit",
    save: "Save",
    skip: "Skip",
    delete: "Delete",
    keep: "Keep",
  },
  modal: {
    wait: "Please wait...",
    synchronization: "Synchronization",
    import: {
      titel: "Import report",
      potentiallyDeletedLine1:
        "The following data are not available in the backup!",
      potentiallyDeletedLine2: "What do you want to do with them?",
      territories: "Territories",
      publishers: "Publisher",
      visitBans: "Not visit",
      tags: "Tags",
      assignments: "Assignments",
      territory: "Territory",
      endTime: "Return",
      startTime: "Begin",
      added: "The following data were added / changed",
      noneAdded: "No data was changed.",
      ready: "Done",
      reallyDelete: "Do you really want to delete it?",
    },
  },
  search: {
    title: "Search",
  },
  platformActions: {
    sync: "Territory Offline Sync",
    sharingFailed: "File sharing failed",
  },
  LastDoingActionsEnum: {
    create: "created",
    update: "edited",
    delete: "deleted",
    print: "printed",
    assign: "assigned",
    reassign: "reassigned",
    assignReturn: "returned",
    import: "import",
    export: "export",
  },
};
