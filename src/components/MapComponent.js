import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Select from "react-select";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import NoSsr from "@material-ui/core/NoSsr";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import MenuItem from "@material-ui/core/MenuItem";
import CancelIcon from "@material-ui/icons/Cancel";
import { emphasize } from "@material-ui/core/styles/colorManipulator";
import usermarker from "../img/u.png";
import parkingspacemarker from "../img/marker.png";
import {
  LayersControl,
  BaseLayer,
  Map,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";

let myIcon1 = L.icon({
  iconUrl: usermarker,
  iconAnchor: [12.5, 41],
  popupAnchor: [7, -41]
});

const suggestions = [
  {
    label: "777 Brockton Avenue, Abington MA 2351",
    lat: "42.096020",
    lng: "-70.967570"
  },
  {
    label: "30 Memorial Drive, Avon MA 2322",
    lat: "42.121185",
    lng: "-71.030151"
  },
  {
    label: "250 Hartford Avenue, Bellingham MA 2019",
    lat: "42.119200",
    lng: "-71.466270"
  },
  {
    label: "700 Oak Street, Brockton MA 2301",
    lat: "42.098140",
    lng: "-71.056490"
  },
  {
    label: "66-4 Parkhurst Rd, Chelmsford MA 1824",
    lat: "42.616550",
    lng: "-71.363340"
  },
  {
    label: "591 Memorial Dr, Chicopee MA 1020",
    lat: "42.172410",
    lng: "-72.573850"
  },
  {
    label: "55 Brooksby Village Way, Danvers MA 1923",
    lat: "42.554240",
    lng: "-70.968900"
  },
  {
    label: "137 Teaticket Hwy, East Falmouth MA 2536",
    lat: "41.571430",
    lng: "-70.587570"
  },
  {
    label: "42 Fairhaven Commons Way, Fairhaven MA 2719",
    lat: "41.645040",
    lng: "-70.887910"
  },
  {
    label: "374 William S Canning Blvd, Fall River MA 2721",
    lat: "41.672370",
    lng: "-71.157700"
  },
  {
    label: "121 Worcester Rd, Framingham MA 1701",
    lat: "42.300160",
    lng: "-71.399300"
  },
  {
    label: "677 Timpany Blvd, Gardner MA 1440",
    lat: "42.551090",
    lng: "-71.994500"
  },
  {
    label: "337 Russell St, Hadley MA 1035",
    lat: "42.354160",
    lng: "-72.553440"
  },
  {
    label: "295 Plymouth Street, Halifax MA 2338",
    lat: "41.996570",
    lng: "-70.846500"
  },
  {
    label: "1775 Washington St, Hanover MA 2339",
    lat: "42.137170",
    lng: "-70.841830"
  },
  { label: "280 Washington Street, Hudson MA 1749" },
  { label: "20 Soojian Dr, Leicester MA 1524" },
  { label: "11 Jungle Road, Leominster MA 1453" },
  { label: "301 Massachusetts Ave, Lunenburg MA 1462" },
  { label: "780 Lynnway, Lynn MA 1905" },
  { label: "70 Pleasant Valley Street, Methuen MA 1844" },
  { label: "830 Curran Memorial Hwy, North Adams MA 1247" },
  { label: "1470 S Washington St, North Attleboro MA 2760" },
  { label: "506 State Road, North Dartmouth MA 2747" },
  { label: "742 Main Street, North Oxford MA 1537" },
  { label: "72 Main St, North Reading MA 1864" },
  { label: "200 Otis Street, Northborough MA 1532" },
  { label: "180 North King Street, Northhampton MA 1060" },
  { label: "555 East Main St, Orange MA 1364" },
  { label: "555 Hubbard Ave-Suite 12, Pittsfield MA 1201" },
  { label: "300 Colony Place, Plymouth MA 2360" },
  { label: "301 Falls Blvd, Quincy MA 2169" },
  { label: "36 Paramount Drive, Raynham MA 2767" },
  { label: "450 Highland Ave, Salem MA 1970" },
  { label: "1180 Fall River Avenue, Seekonk MA 2771" },
  { label: "1105 Boston Road, Springfield MA 1119" },
  { label: "100 Charlton Road, Sturbridge MA 1566" },
  { label: "262 Swansea Mall Dr, Swansea MA 2777" },
  { label: "333 Main Street, Tewksbury MA 1876" },
  { label: "550 Providence Hwy, Walpole MA 2081" },
  { label: "352 Palmer Road, Ware MA 1082" },
  { label: "3005 Cranberry Hwy Rt 6 28, Wareham MA 2538" },
  { label: "250 Rt 59, Airmont NY 10901" },
  { label: "141 Washington Ave Extension, Albany NY 12205" },
  { label: "13858 Rt 31 W, Albion NY 14411" },
  { label: "2055 Niagara Falls Blvd, Amherst NY 14228" },
  { label: "101 Sanford Farm Shpg Center, Amsterdam NY 12010" },
  { label: "297 Grant Avenue, Auburn NY 13021" },
  { label: "4133 Veterans Memorial Drive, Batavia NY 14020" },
  { label: "6265 Brockport Spencerport Rd, Brockport NY 14420" },
  { label: "5399 W Genesse St, Camillus NY 13031" },
  { label: "3191 County rd 10, Canandaigua NY 14424" },
  { label: "30 Catskill, Catskill NY 12414" },
  { label: "161 Centereach Mall, Centereach NY 11720" },
  { label: "3018 East Ave, Central Square NY 13036" },
  { label: "100 Thruway Plaza, Cheektowaga NY 14225" },
  { label: "8064 Brewerton Rd, Cicero NY 13039" },
  { label: "5033 Transit Road, Clarence NY 14031" },
  { label: "3949 Route 31, Clay NY 13041" },
  { label: "139 Merchant Place, Cobleskill NY 12043" },
  { label: "85 Crooked Hill Road, Commack NY 11725" },
  { label: "872 Route 13, Cortlandville NY 13045" },
  { label: "279 Troy Road, East Greenbush NY 12061" },
  { label: "2465 Hempstead Turnpike, East Meadow NY 11554" },
  { label: "6438 Basile Rowe, East Syracuse NY 13057" },
  { label: "25737 US Rt 11, Evans Mills NY 13637" },
  { label: "901 Route 110, Farmingdale NY 11735" },
  { label: "2400 Route 9, Fishkill NY 12524" },
  { label: "10401 Bennett Road, Fredonia NY 14063" },
  { label: "1818 State Route 3, Fulton NY 13069" },
  { label: "4300 Lakeville Road, Geneseo NY 14454" },
  { label: "990 Route 5 20, Geneva NY 14456" },
  { label: "311 RT 9W, Glenmont NY 12077" },
  { label: "200 Dutch Meadows Ln, Glenville NY 12302" },
  { label: "100 Elm Ridge Center Dr, Greece NY 14626" },
  { label: "1549 Rt 9, Halfmoon NY 12065" },
  { label: "5360 Southwestern Blvd, Hamburg NY 14075" },
  { label: "103 North Caroline St, Herkimer NY 13350" },
  { label: "1000 State Route 36, Hornell NY 14843" },
  { label: "1400 County Rd 64, Horseheads NY 14845" },
  { label: "135 Fairgrounds Memorial Pkwy, Ithaca NY 14850" },
  { label: "2 Gannett Dr, Johnson City NY 13790" },
  { label: "233 5th Ave Ext, Johnstown NY 12095" },
  { label: "601 Frank Stottile Blvd, Kingston NY 12401" },
  { label: "350 E Fairmount Ave, Lakewood NY 14750" },
  { label: "4975 Transit Rd, Lancaster NY 14086" },
  { label: "579 Troy-Schenectady Road, Latham NY 12110" },
  { label: "5783 So Transit Road, Lockport NY 14094" },
  { label: "7155 State Rt 12 S, Lowville NY 13367" },
  { label: "425 Route 31, Macedon NY 14502" },
  { label: "3222 State Rt 11, Malone NY 12953" },
  { label: "200 Sunrise Mall, Massapequa NY 11758" },
  { label: "43 Stephenville St, Massena NY 13662" },
  { label: "750 Middle Country Road, Middle Island NY 11953" },
  { label: "470 Route 211 East, Middletown NY 10940" },
  { label: "3133 E Main St, Mohegan Lake NY 10547" },
  { label: "288 Larkin, Monroe NY 10950" },
  { label: "41 Anawana Lake Road, Monticello NY 12701" },
  { label: "4765 Commercial Drive, New Hartford NY 13413" },
  { label: "1201 Rt 300, Newburgh NY 12550" },
  { label: "255 W Main St, Avon CT 6001" },
  { label: "120 Commercial Parkway, Branford CT 6405" },
  { label: "1400 Farmington Ave, Bristol CT 6010" },
  { label: "161 Berlin Road, Cromwell CT 6416" },
  { label: "67 Newton Rd, Danbury CT 6810" },
  { label: "656 New Haven Ave, Derby CT 6418" },
  { label: "69 Prospect Hill Road, East Windsor CT 6088" },
  { label: "150 Gold Star Hwy, Groton CT 6340" },
  { label: "900 Boston Post Road, Guilford CT 6437" },
  { label: "2300 Dixwell Ave, Hamden CT 6514" },
  { label: "495 Flatbush Ave, Hartford CT 6106" },
  { label: "180 River Rd, Lisbon CT " },
  { label: "420 Buckland Hills Dr, Manchester CT 6040" },
  { label: "1365 Boston Post Road, Milford CT 6460" },
  { label: "1100 New Haven Road, Naugatuck CT 6770" },
  { label: "315 Foxon Blvd, New Haven CT 6513" },
  { label: "164 Danbury Rd, New Milford CT 6776" },
  { label: "3164 Berlin Turnpike, Newington CT 6111" },
  { label: "474 Boston Post Road, North Windham CT 6256" },
  { label: "650 Main Ave, Norwalk CT 6851" },
  { label: "680 Connecticut Avenue, Norwalk CT 6854" },
  { label: "220 Salem Turnpike, Norwich CT 6360" },
  { label: "655 Boston Post Rd, Old Saybrook CT 6475" },
  { label: "625 School Street, Putnam CT 6260" },
  { label: "80 Town Line Rd, Rocky Hill CT 6067" },
  { label: "465 Bridgeport Avenue, Shelton CT 6484" },
  { label: "235 Queen St, Southington CT 6489" },
  { label: "150 Barnum Avenue Cutoff, Stratford CT 6614" },
  { label: "970 Torringford Street, Torrington CT 6790" },
  { label: "844 No Colony Road, Wallingford CT 6492" },
  { label: "910 Wolcott St, Waterbury CT 6705" },
  { label: "155 Waterford Parkway No, Waterford CT 6385" },
  { label: "515 Sawmill Road, West Haven CT 6516" },
  { label: "2473 Hackworth Road, Adamsville AL 35005" },
  { label: "630 Coonial Promenade Pkwy, Alabaster AL 35007" },
  { label: "2643 Hwy 280 West, Alexander City AL 35010" },
  { label: "540 West Bypass, Andalusia AL 36420" },
  { label: "5560 Mcclellan Blvd, Anniston AL 36206" },
  { label: "1450 No Brindlee Mtn Pkwy, Arab AL 35016" },
  { label: "1011 US Hwy 72 East, Athens AL 35611" },
  { label: "973 Gilbert Ferry Road Se, Attalla AL 35954" },
  { label: "1717 South College Street, Auburn AL 36830" },
  { label: "701 Mcmeans Ave, Bay Minette AL 36507" },
  { label: "750 Academy Drive, Bessemer AL 35022" },
  { label: "312 Palisades Blvd, Birmingham AL 35209" },
  { label: "1600 Montclair Rd, Birmingham AL 35210" },
  { label: "5919 Trussville Crossings Pkwy, Birmingham AL 35235" },
  { label: "9248 Parkway East, Birmingham AL 35206" },
  { label: "1972 Hwy 431, Boaz AL 35957" },
  { label: "10675 Hwy 5, Brent AL 35034" },
  { label: "2041 Douglas Avenue, Brewton AL 36426" },
  { label: "5100 Hwy 31, Calera AL 35040" },
  { label: "1916 Center Point Rd, Center Point AL 35215" },
  { label: "1950 W Main St, Centre AL 35960" },
  { label: "16077 Highway 280, Chelsea AL 35043" },
  { label: "1415 7Th Street South, Clanton AL 35045" },
  { label: "626 Olive Street Sw, Cullman AL 35055" },
  { label: "27520 Hwy 98, Daphne AL 36526" },
  { label: "2800 Spring Avn SW, Decatur AL 35603" },
  { label: "969 Us Hwy 80 West, Demopolis AL 36732" },
  { label: "3300 South Oates Street, Dothan AL 36301" },
  { label: "4310 Montgomery Hwy, Dothan AL 36303" },
  { label: "600 Boll Weevil Circle, Enterprise AL 36330" },
  { label: "3176 South Eufaula Avenue, Eufaula AL 36027" },
  { label: "7100 Aaron Aronov Drive, Fairfield AL 35064" },
  { label: "10040 County Road 48, Fairhope AL 36533" },
  { label: "3186 Hwy 171 North, Fayette AL 35555" },
  { label: "3100 Hough Rd, Florence AL 35630" },
  { label: "2200 South Mckenzie St, Foley AL 36535" },
  { label: "2001 Glenn Bldv Sw, Fort Payne AL 35968" },
  { label: "340 East Meighan Blvd, Gadsden AL 35903" },
  { label: "890 Odum Road, Gardendale AL 35071" },
  { label: "1608 W Magnolia Ave, Geneva AL 36340" },
  { label: "501 Willow Lane, Greenville AL 36037" },
  { label: "170 Fort Morgan Road, Gulf Shores AL 36542" },
  { label: "11697 US Hwy 431, Guntersville AL 35976" },
  { label: "42417 Hwy 195, Haleyville AL 35565" },
  { label: "1706 Military Street South, Hamilton AL 35570" },
  { label: "1201 Hwy 31 NW, Hartselle AL 35640" },
  { label: "209 Lakeshore Parkway, Homewood AL 35209" },
  { label: "2780 John Hawkins Pkwy, Hoover AL 35244" },
  { label: "5335 Hwy 280 South, Hoover AL 35242" },
  { label: "1007 Red Farmer Drive, Hueytown AL 35023" },
  { label: "2900 S Mem PkwyDrake Ave, Huntsville AL 35801" },
  { label: "11610 Memorial Pkwy South, Huntsville AL 35803" },
  { label: "2200 Sparkman Drive, Huntsville AL 35810" },
  { label: "330 Sutton Rd, Huntsville AL 35763" },
  { label: "6140A Univ Drive, Huntsville AL 35806" },
  { label: "4206 N College Ave, Jackson AL 36545" },
  { label: "1625 Pelham South, Jacksonville AL 36265" },
  { label: "1801 Hwy 78 East, Jasper AL 35501" },
  { label: "8551 Whitfield Ave, Leeds AL 35094" },
  { label: "8650 Madison Blvd, Madison AL 35758" },
  { label: "145 Kelley Blvd, Millbrook AL 36054" },
  { label: "1970 S University Blvd, Mobile AL 36609" },
  { label: "6350 Cottage Hill Road, Mobile AL 36609" },
  { label: "101 South Beltline Highway, Mobile AL 36606" },
  { label: "2500 Dawes Road, Mobile AL 36695" },
  { label: "5245 Rangeline Service Rd, Mobile AL 36619" },
  { label: "685 Schillinger Rd, Mobile AL 36695" },
  { label: "3371 S Alabama Ave, Monroeville AL 36460" },
  { label: "10710 Chantilly Pkwy, Montgomery AL 36117" },
  { label: "3801 Eastern Blvd, Montgomery AL 36116" },
  { label: "6495 Atlanta Hwy, Montgomery AL 36117" },
  { label: "851 Ann St, Montgomery AL 36107" },
  { label: "15445 Highway 24, Moulton AL 35650" },
  { label: "517 West Avalon Ave, Muscle Shoals AL 35661" },
  { label: "5710 Mcfarland Blvd, Northport AL 35476" },
  { label: "2453 2Nd Avenue East, Oneonta AL 35121  205-625-647" },
  { label: "2900 Pepperrell Pkwy, Opelika AL 36801" },
  { label: "92 Plaza Lane, Oxford AL 36203" },
  { label: "1537 Hwy 231 South, Ozark AL 36360" },
  { label: "2181 Pelham Pkwy, Pelham AL 35124" },
  { label: "165 Vaughan Ln, Pell City AL 35125" },
  { label: "3700 Hwy 280-431 N, Phenix City AL 36867" },
  { label: "1903 Cobbs Ford Rd, Prattville AL 36066" },
  { label: "4180 Us Hwy 431, Roanoke AL 36274" },
  { label: "13675 Hwy 43, Russellville AL 35653" },
  { label: "1095 Industrial Pkwy, Saraland AL 36571" },
  { label: "24833 Johnt Reidprkw, Scottsboro AL 35768" },
  { label: "1501 Hwy 14 East, Selma AL 36703" },
  { label: "7855 Moffett Rd, Semmes AL 36575" },
  { label: "150 Springville Station Blvd, Springville AL 35146" },
  { label: "690 Hwy 78, Sumiton AL 35148" },
  { label: "41301 US Hwy 280, Sylacauga AL 35150" },
  { label: "214 Haynes Street, Talladega AL 35160" },
  { label: "1300 Gilmer Ave, Tallassee AL 36078" },
  { label: "34301 Hwy 43, Thomasville AL 36784" },
  { label: "1420 Us 231 South, Troy AL 36081" },
  { label: "1501 Skyland Blvd E, Tuscaloosa AL 35405" },
  { label: "3501 20th Av, Valley AL 36854" },
  { label: "1300 Montgomery Highway, Vestavia Hills AL 35216" },
  { label: "4538 Us Hwy 231, Wetumpka AL 36092" },
  { label: "2575 Us Hwy 43, Winfield AL 35594" }
].map(suggestion => ({
  value: suggestion.label,
  position: [suggestion.lat, suggestion.lng],
  label: suggestion.label
}));

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  input: {
    display: "flex",
    padding: 0
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden"
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    )
  },
  noOptionsMessage: {
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`
  },
  singleValue: {
    fontSize: 16
  },
  placeholder: {
    position: "absolute",
    left: 2,
    fontSize: 16
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  divider: {
    height: theme.spacing.unit * 2
  }
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function SingleValue(props) {
  return (
    <Typography
      className={props.selectProps.classes.singleValue}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function ValueContainer(props) {
  return (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  );
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused
      })}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  );
}

function Menu(props) {
  return (
    <Paper
      square
      className={props.selectProps.classes.paper}
      {...props.innerProps}
    >
      {props.children}
    </Paper>
  );
}

const components = {
  Control,
  Menu,
  MultiValue,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer
};

class MapComponent extends React.Component {
  state = {
    single: null,
    multi: null,
    data: [],
    coord: []
  };

  handleChange = name => value => {
    console.log(value.position);
    this.setState({
      [name]: value,
      data: value
    });
  };

  render() {
    console.log(this.state.position);
    console.log(this.state.coord);
    const { classes, theme } = this.props;

    const selectStyles = {
      input: base => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      })
    };

    return (
      <div className={classes.root}>
        <NoSsr>
          <Select
            classes={classes}
            styles={selectStyles}
            options={suggestions}
            components={components}
            value={this.state.single}
            onChange={this.handleChange("single")}
            placeholder="Search a country (start with a)"
          />
          <div className="map1">
            <Map className="map1" center={this.state.data.position} zoom={16}>
              <TileLayer
                attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={this.state.data.position} icon={myIcon1}>
                <Popup>Your current location</Popup>
              </Marker>
            </Map>
          </div>
        </NoSsr>
      </div>
    );
  }
}

MapComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MapComponent);
