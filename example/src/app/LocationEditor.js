import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MuiEditableTable from "mui-editable-table";

class LocationEditor extends Component {

  render() {
      const shouldBeReadOnly = function(rowData) {
          return rowData['title'] != 'Mrs';
      };

      const colSpec = [
          {title: 'Tag', fieldName: 'tag', inputType: "TextField", width: 400},
          {title: 'Name', fieldName: 'name', inputType: "TextField", width: 300},
          {title: 'Known', fieldName: 'known', inputType: "Toggle", width: 200, defaultValue: false},
          {title: 'NPCs', fieldName: 'NPCs', inputType: "TextField", width: 500}
      ];

      const rowData = [
  {
    "tag": "StonehillInn", 
      "name": "The Stonehill Inn", 
      "known": true,
      "NPCs": ["ToblinStonehill", "Narth", "Elsa", "Lanar", "Trilena", "Pip", "Freda"]
  },
  {
    "tag": "LionshieldCoster", 
      "name": "Lionshield Coster", 
      "known": true,
      "NPCs": ["LineneGraywind"]
  },
  {
    "tag": "BarthensProvisions", 
      "name": "Barthen's Provisions", 
      "known": true,
      "NPCs": ["ElmarBarthen", "Ander", "Thistle"]
    
  },
  {
    "tag": "TownmastersHall", 
      "name": "Townmaster's Hall", 
      "known": true,
      "NPCs": ["HarbinWester"]
    
  },
  {
    "tag": "ShrineOfLuck", 
      "name": "Shrine of Luck", 
      "known": true,
      "NPCs": ["SisterGaraele"]
    
  },
  {
    "tag": "SleepingGiantTapHouse", 
      "name": "Sleeping Giant tap house", 
      "known": true,
      "NPCs": ["Grista", "TheRedbrands"]
    
  },
  {
    "tag": "EdermathOrchard", 
      "name": "Edermath Orchard", 
      "known": true,
      "NPCs": ["DarenEdermath"]
    
  },
  {
    "tag": "TresendarManor", 
      "name": "Tresendar Manor", 
      "known": false,
      "NPCs": ["RedbrandMinions"]
    
  },
  {
    "tag": "OldOwlWell", 
      "name": "Old Owl Well", 
      "known": false,
      "NPCs": ["Hamun"]
    
  },
  {
    "tag": "PhandalinMinersExchange", 
      "name": "Phandalin Miner's Exchange", 
      "known": true,
      "NPCs": ["HaliaThornton"]
    
  },
  {
    "tag": "AlderleafFarm", 
      "name": "Alderleaf Farm", 
      "known": true,
      "NPCs": ["QellineAlderleaf", "Carp"]
    
  },
  {
    "tag": "Thundertree", 
      "name": "Thundertree", 
      "known": false,
      "NPCs": ["Reidoth"]
    
  },
  {
    "tag": "AgathasLair", 
      "name": "Agatha's Lair", 
      "known": false,
      "NPCs": ["Agatha"]
    
  },
  {
    "tag": "OrcCamp", 
      "name": "Orc Camp at Triboar Trail", 
      "known": true,
      "NPCs": []
    
  },
  {
    "tag": "CragmawCastle", 
      "name": "Cragmaw Castle", 
      "known": false,
      "NPCs": []
    
  },
  {
    "tag": "WaveEchoCave", 
      "name": "Wave Echo Cave", 
      "known": false,
      "NPCs": []
     
  }
];

      const onChange = (dataTable) => {
          console.log(dataTable)
      };

      return (
        <div>
           
      <MuiThemeProvider>
          <MuiEditableTable
              colSpec={colSpec}
              rowData={rowData}
              onChange={onChange}
              reorderable={true}
          />
      </MuiThemeProvider>
      </div>
    );
  }
}

export default LocationEditor;
