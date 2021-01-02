import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  
  filterTerm: string;

  constructor() { }

  chapters = [
    {
        "id": 0,
        "chapterName": "Alpha",
        "charterYear": "1911",
        "universityName": "Indiana University",
        "city": "Bloomington, Indiana",
        "nickName":"The Originator",
        "province": "North Central Province"
    },
    {
        "id": 1,
        "chapterName": "Beta",
        "charterYear": "1913",
        "universityName": "University of Illinois",
        "city": "Champaign, Illinois",
        "nickName":"\"Greater\" Beta",
        "moreInfo": "Was originally the University of Illinois but in 1982 became University of Illinois at Urbana-Champaign. Beta also hosted the Grand Chapter Meeting where the name was changed from Kappa Alpha Nu to Kappa Alpha Psi.",
        "province": "North Central Province"
    },
    {
        "id": 2,
        "chapterName": "Gamma",
        "charterYear": "1914",
        "universityName": "University of Iowa",
        "city": "Iowa City, Iowa",
        "nickName":"\"Gangster\" Gamma Chapter",
        "province": "North Central Province"
    },
    {
        "id": 3,
        "chapterName": "Delta",
        "charterYear": "1915",
        "universityName": "Wilberforce University",
        "city": "Wilberforce, Ohio",
        "moreInfo": "The Delta Chapter was founded by Elder Watson Diggs in 1915. The Delta Chapter was the last Chapter called Kappa Alpha Nu and the first chapter designated Kappa Alpha Psi. Delta was the first chapter established at an HBCU.",
        "province": "East Central Province"
    },
    {
        "id": 4,
        "chapterName": "Epsilon",
        "charterYear": "1915",
        "universityName": "Lincoln University (Pennsylvania)",
        "city": "Lincoln University, Pennsylvania",
        "moreInfo": "The Epsilon Chapter is the first chapter founded on the east coast thus giving it the nickname \"The Star of the East\". Founded on December 4, 1915, Epsilon is the oldest chapter in the Northeastern Province. Elder Watson Diggs rode on horse and buggy from Indiana to Pennsylvania to personally sign the chapter's charter, as the first chapter to be founded as \"Kappa Alpha Psi\".",
        "province": "Northeastern Province"
    },
    {
        "id": 5,
        "chapterName": "Zeta",
        "charterYear": "1915",
        "universityName": "The Ohio State University",
        "city": "Columbus, Ohio",
        "nickName":"Zeta Zulus",
        "province": "East Central Province",
        "moreInfo":"The Zeta Chapter was founded on December 15, 1915 by Grand Polemarch Elder Watson Diggs and members of the Delta Chapter."
    },
    {
        "id": 6,
        "chapterName": "Eta",
        "charterYear": "1916",
        "universityName": "University of Nebraska",
        "city": "Lincoln, Nebraska",
        "nickName":"Star City Nupes",
        "province": "Middle Western Province"
    },
    {
        "id": 7,
        "chapterName": "Theta",
        "charterYear": "1917",
        "universityName": "Northwestern University",
        "city": "Evanston, Illinois",
        "nickName":"\"Terrible\" Theta Chapter",
        "province": "North Central Province"
    },
    {
        "id": 8,
        "chapterName": "Iota",
        "charterYear": "1918",
        "universityName": "University of Chicago",
        "city": "Chicago, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 9,
        "chapterName": "Kappa",
        "charterYear": "1919",
        "universityName": "Meharry Medical College",
        "city": "Nashville, Tennessee",
        "moreInfo": "The first \"Intermediate Chapter\" (Chapters chartered at degree granting professional or post graduate institutions which generally require entering students to have earned a bachelor’s degree as a condition of admission) in the fraternity. Others being Theta Tau & Kappa Zeta.",
        "province": "South Central Province"
    },
    {
        "id": 10,
        "chapterName": "Lambda",
        "charterYear": "1920",
        "universityName": "Temple University",
        "city": "Philadelphia, Pennsylvania",
        "moreInfo": "The Lambda Chapter was chartered on February 20, 1920 by founder John Milton Lee and Edward Hampton Smyrl. Lambda is revered as the Krown Jewel, having been the foundation for many other chapters in the Northeastern Province including Beta Sigma, Gamma Omega, Delta Eta, Delta Theta, Eta Delta, Kappa Gamma, Lambda Tau, Nu Xi, and Xi Mu.",
        "province": "Northeastern Province"
    },
    {
        "id": 11,
        "chapterName": "Mu",
        "charterYear": "1920",
        "universityName": "University of Kansas",
        "city": "Lawrence, Kansas",
        "nickName":"\"Maniak\" Mu Chapter",
        "province": "Middle Western Province"
    },
    {
        "id": 12,
        "chapterName": "Nu",
        "charterYear": "1920",
        "universityName": "Purdue University",
        "city": "West Lafayette, Indiana",
        "province": "North Central Province"
    },
    {
        "id": 13,
        "chapterName": "Xi",
        "charterYear": "1920",
        "universityName": "Howard University",
        "city": "Washington D.C.",
        "province": "Eastern Province"
    },
    {
        "id": 14,
        "chapterName": "Omicron",
        "charterYear": "1921",
        "universityName": "Columbia University",
        "city": "New York, New York",
        "moreInfo": "Its full title is Columbia University in the City of New York",
        "province": "Northeastern Province"
    },
    {
        "id": 15,
        "chapterName": "Pi",
        "charterYear": "1921",
        "universityName": "Morehouse College",
        "city": "Atlanta, Georgia",
        "moreInfo": "The Pi Chapter was the first chapter of Kappa Alpha Psi in the Deep South.",
        "province": "Southeastern Province"
    },
    {
        "id": 16,
        "chapterName": "Rho",
        "charterYear": "1921",
        "universityName": "Washburn University",
        "city": "Topeka, Kansas",
        "province": "Middle Western Province"
    },
    {
        "id": 17,
        "chapterName": "Sigma",
        "charterYear": "1922",
        "universityName": "University of Michigan",
        "city": "Ann Arbor, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 18,
        "chapterName": "Tau",
        "charterYear": "1923",
        "universityName": "West Virginia State University",
        "city": "Institute, West Virginia",
        "nickName":"Terrible Tau",
        "moreInfo": "Was originally West Virginia Collegiate Institute but in 1929 became West Virginia State College; in 2004 became West Virginia State University",
        "province": "East Central Province"
    },
    {
        "id": 19,
        "chapterName": "Upsilon",
        "charterYear": "1923",
        "universityName": "University of California, Los Angeles",
        "city": "Los Angeles, California",
        "moreInfo": "California State University, Los Angeles and California State University, Northridge are also a part of the Upsilon Chapter",
        "province": "Western Province"
    },
    {
        "id": 20,
        "chapterName": "Phi",
        "charterYear": "1924",
        "universityName": "University at Buffalo",
        "city": "Buffalo, New York",
        "moreInfo": "City-wide chapter. Includes Buffalo State College",
        "province": "Northern Province"
    },
    {
        "id": 21,
        "chapterName": "Chi",
        "charterYear": "1924",
        "universityName": "Boston University",
        "city": "Boston, Massachusetts",
        "nickName":"Mighty Chi",
        "province": "Northeastern Province"
    },
    {
        "id": 22,
        "chapterName": "Psi",
        "charterYear": "1924",
        "universityName": "University of Minnesota",
        "city": "Minneapolis, Minnesota",
        "province": "North Central Province"
    },
    {
        "id": 23,
        "chapterName": "Omega",
        "charterYear": "1925",
        "universityName": "Drake University",
        "nickName":"Great Outrageous Omega “Death” Chapter",
        "city": "Des Moines, Iowa",
        "province": "North Central Province",
        "moreInfo":"Originally chartered and incorporated at Drake University in 1925. The Omega Chapter became a joint Chapter between Drake University & Iowa State University in the early 1950's."
    },
    {
        "id": 24,
        "chapterName": "Alpha Beta",
        "charterYear": "1927",
        "universityName": "Wayne State University",
        "city": "Detroit, Michigan",
        "moreInfo": "Was originally the College of the City of Detroit. In 1934 became Wayne University; in 1956 became Wayne State University",
        "province": "Northern Province"
    },
    {
        "id": 25,
        "chapterName": "Alpha Gamma",
        "charterYear": "1927",
        "universityName": "Virginia Union University",
        "city": "Richmond, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 26,
        "chapterName": "Alpha Delta",
        "charterYear": "1927",
        "universityName": "Fisk University",
        "city": "Nashville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 27,
        "chapterName": "Alpha Epsilon",
        "charterYear": "1927",
        "universityName": "Johnson C. Smith University",
        "city": "Charlotte, North Carolina",
        "moreInfo": "Part of Middle Eastern Province; when chartered, came under Southeastern Province.",
        "province": "Middle Eastern Province"
    },
    {
        "id": 28,
        "chapterName": "Alpha Zeta",
        "charterYear": "1928",
        "universityName": "Indiana State University",
        "city": "Terre Haute, Indiana",
        "province": "North Central Province"
    },
    {
        "id": 29,
        "chapterName": "Alpha Eta",
        "charterYear": "1929",
        "universityName": "University of Nebraska at Omaha",
        "city": "Omaha, Nebraska",
        "nickName":"Unfadable Alpha Eta",
        "moreInfo": "One-collective chapter for University of Nebraska at Omaha & Creighton University",
        "province": "Middle Western Province"
    },
    {
        "id": 30,
        "chapterName": "Alpha Theta",
        "charterYear": "1931",
        "universityName": "Tennessee State University",
        "city": "Nashville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 31,
        "chapterName": "Alpha Iota",
        "charterYear": "1931",
        "universityName": "Morgan State University",
        "city": "Baltimore, Maryland",
        "province": "Eastern Province"
    },
    {
        "id": 32,
        "chapterName": "Alpha Kappa",
        "charterYear": "1931",
        "universityName": "North Carolina Central University",
        "city": "Durham, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 33,
        "chapterName": "Alpha Lambda",
        "charterYear": "1931",
        "universityName": "South Carolina State University",
        "city": "Orangeburg, South Carolina",
        "nickName":"Big AL - The Flagship of the Southeast",
        "province": "Southeastern Province"
    },
    {
        "id": 34,
        "chapterName": "Alpha Mu",
        "charterYear": "1932",
        "universityName": "Lincoln University",
        "city": "Jefferson City, Missouri",
        "moreInfo": "Replaced by the Rho Eta Chapter chartered in 2013. Known from Koast to Koast as \"The Bloody\" \"The Bloody\" \"The Bloody\"",
        "province": "Middle Western Province"
    },
    {
        "id": 35,
        "chapterName": "Alpha Nu",
        "charterYear": "1933",
        "universityName": "North Carolina A&T State University",
        "city": "Greensboro, North Carolina",
        "nickName":"The Beast of the Middle East",
        "province": "Middle Eastern Province"
    },
    {
        "id": 36,
        "chapterName": "Alpha Xi",
        "charterYear": "1933",
        "universityName": "Florida A&M University",
        "city": "Tallahassee, Florida",
        "nickName": "Rock of the South",
        "province": "Southern Province"
    },
    {
        "id": 37,
        "chapterName": "Alpha Omicron",
        "charterYear": "1933",
        "universityName": "University of Louisville",
        "city": "Louisville, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 38,
        "chapterName": "Alpha Pi",
        "charterYear": "1933",
        "universityName": "Langston University",
        "city": "Langston, Oklahoma",
        "nickName":"The Wild Bunch",
        "moreInfo": "Was originally the Colored Agricultural and Normal University but in 1941, became Langston University",
        "province": "Middle Western Province"
    },
    {
        "id": 39,
        "chapterName": "Alpha Rho",
        "charterYear": "1934",
        "universityName": "Lewis Institute",
        "city": "Chicago, Illinois",
        "moreInfo": "Illinois Institute of Technology was formed in 1940 by the merger of Armour Institute of Technology (founded in 1890) and Lewis Institute (founded in 1895). Replaced by the Kappa Phi Chapter chartered in 1981.",
        "province": "North Central Province"
    },
    {
        "id": 40,
        "chapterName": "Alpha Sigma",
        "charterYear": "1935",
        "universityName": "Southern University",
        "city": "Baton Rouge, Louisiana",
        "nickName":"The Mothership",
        "province": "Southwestern Province"
    },
    {
        "id": 41,
        "chapterName": "Alpha Tau",
        "charterYear": "1935",
        "universityName": "Bluefield State College",
        "city": "Bluefield, West Virginia",
        "province": "Middle Eastern Province"
    },
    {
        "id": 42,
        "chapterName": "Alpha Upsilon",
        "charterYear": "1935",
        "universityName": "Kentucky State University",
        "city": "Frankfort, Kentucky",
        "moreInfo": "Was originally Kentucky State Industrial College for Colored Persons but in 1938 became Kentucky State College for Negroes. The term \"for Negroes\" was dropped in 1952. Kentucky State College became a university in 1972.",
        "province": "South Central Province"
    },
    {
        "id": 43,
        "chapterName": "Alpha Phi",
        "charterYear": "1935",
        "universityName": "Virginia State University",
        "city": "Petersburg, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 44,
        "chapterName": "Alpha Chi",
        "charterYear": "1935",
        "universityName": "Wiley College",
        "city": "Marshall, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 45,
        "chapterName": "Alpha Psi",
        "charterYear": "1936",
        "universityName": "Pittsburg State University",
        "city": "Pittsburg, Kansas",
        "moreInfo": "Was originally the Kansas State Teachers College of Pittsburg but in 1959 became Kansas State College of Pittsburg; in 1977 it became Pittsburg State University — also known as Pitt State or PSU.",
        "province": "Middle Western Province"
    },
    {
        "id": 46,
        "chapterName": "Alpha Omega",
        "charterYear": "1936",
        "universityName": "Cleveland State University",
        "city": "Cleveland, Ohio",
        "moreInfo": "Was originally chartered on the campus of Western Reserve University in 1936. The chapter was reactivated on the campus of Cleveland State University on November 20, 1971. This is where the charter is currently established. City wide chapter for Cleveland, OH which includes but is not limited to: Cleveland State University, Case Western Reserve University, John Carroll University, Notre Dame College and Ursuline College.",
        "province": "East Central Province"
    },
    {
        "id": 47,
        "chapterName": "Beta Beta",
        "charterYear": "1937",
        "universityName": "Texas College",
        "city": "Tyler, Texas",
        "moreInfo": "Referred to as the “Bloody” Beta Beta chapter or Triple B for short.",
        "province": "Southwestern Province"
    },
    {
        "id": 48,
        "chapterName": "Beta Gamma",
        "charterYear": "1937",
        "universityName": "Dillard University",
        "city": "New Orleans, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 49,
        "chapterName": "Beta Delta",
        "charterYear": "1937",
        "universityName": "Morris Brown College",
        "city": "Atlanta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 50,
        "chapterName": "Beta Epsilon",
        "charterYear": "1937",
        "universityName": "University of Pittsburgh",
        "city": "Pittsburgh, Pennsylvania",
        "province": "East Central Province"
    },
    {
        "id": 51,
        "chapterName": "Beta Zeta",
        "charterYear": "1938",
        "universityName": "Alabama State University",
        "city": "Montgomery, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 52,
        "chapterName": "Beta Eta",
        "charterYear": "1939",
        "universityName": "University of Cincinnati",
        "city": "Cincinnati, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 53,
        "chapterName": "Beta Theta",
        "charterYear": "1939",
        "universityName": "University of Colorado",
        "city": "Boulder, Colorado",
        "province": "Middle Western Province"
    },
    {
        "id": 54,
        "chapterName": "Beta Iota",
        "charterYear": "1939",
        "universityName": "Xavier University of Louisiana",
        "city": "New Orleans, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 55,
        "chapterName": "Beta Kappa",
        "charterYear": "1940",
        "universityName": "University of the District of Columbia",
        "city": "Washington D.C.",
        "nickName":"The \"Illustrious\" Beta Kappa",
        "province": "Eastern Province"
    },
    {
        "id": 56,
        "chapterName": "Beta Lambda",
        "charterYear": "1940",
        "universityName": "Lane College",
        "city": "Jackson, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 57,
        "chapterName": "Beta Mu",
        "charterYear": "1940",
        "universityName": "LeMoyne-Owen College",
        "city": "Memphis, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 58,
        "chapterName": "Beta Nu",
        "charterYear": "1942",
        "universityName": "St. Louis University",
        "city": "St. Louis, Missouri",
        "moreInfo": "One-collective chapter for St. Louis University and Harris-Stowe State University College",
        "province": "Middle Western Province"
    },
    {
        "id": 59,
        "chapterName": "Beta Xi",
        "charterYear": "1942",
        "universityName": "University of Toledo",
        "city": "Toledo, Ohio",
        "province": "Northern Province"
    },
    {
        "id": 60,
        "chapterName": "Beta Omicron",
        "charterYear": "1946",
        "universityName": "University of Wisconsin",
        "city": "Madison, Wisconsin",
        "province": "North Central Province"
    },
    {
        "id": 61,
        "chapterName": "Beta Pi",
        "charterYear": "1946",
        "universityName": "Youngstown State University",
        "city": "Youngstown, Ohio",
        "moreInfo": "Was originally Youngstown College but in 1955 became Youngstown University; in 1967 became Youngstown State University (YSU)",
        "province": "East Central Province"
    },
    {
        "id": 62,
        "chapterName": "Beta Rho",
        "charterYear": "1947",
        "universityName": "Allen University",
        "city": "Columbia, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 63,
        "chapterName": "Beta Sigma",
        "charterYear": "1947",
        "universityName": "Delaware State University",
        "city": "Dover, Delaware",
        "moreInfo": "Was originally Delaware State College but in 1993 became Delaware State University. Replaced by the Pi Eta Chapter chartered in 2007.",
        "province": "Northeastern Province"
    },
    {
        "id": 64,
        "chapterName": "Beta Tau",
        "charterYear": "1947",
        "universityName": "Philander Smith College",
        "city": "Little Rock, Arkansas",
        "nickName":"The Godfather Chapter",
        "province": "Southwestern Province"
    },
    {
        "id": 65,
        "chapterName": "Beta Upsilon",
        "charterYear": "1947",
        "universityName": "Texas Southern University",
        "city": "Houston, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 66,
        "chapterName": "Beta Phi",
        "charterYear": "1947",
        "universityName": "Knoxville College",
        "city": "Knoxville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 67,
        "chapterName": "Beta Chi",
        "charterYear": "1947",
        "universityName": "Hampton University",
        "city": "Hampton, Virginia",
        "nickName":"Monster by the Sea",
        "moreInfo": "Was originally Hampton Institute but in 1984 became Hampton University",
        "province": "Eastern Province"
    },
    {
        "id": 68,
        "chapterName": "Beta Psi",
        "charterYear": "1947",
        "universityName": "Kansas State University",
        "city": "Manhattan, Kansas",
        "province": "Middle Western Province"
    },
    {
        "id": 69,
        "chapterName": "Beta Omega",
        "charterYear": "1947",
        "universityName": "University of Southern California",
        "city": "Los Angeles, California",
        "province": "Western Province"
    },
    {
        "id": 70,
        "chapterName": "Gamma Alpha",
        "charterYear": "1947",
        "universityName": "University of California, Berkeley",
        "city": "Berkeley, California",
        "province": "Western Province"
    },
    {
        "id": 71,
        "chapterName": "Gamma Beta",
        "charterYear": "1948",
        "universityName": "Western Michigan University",
        "city": "Kalamazoo, Michigan",
        "moreInfo": "Originally; Western State Normal School, today known as Western Michigan University. The Gamma Beta Chapter was influential in the chartering of the Epsilon Tau Chapter Of Kappa Alpha Psi. Gamma Beta is regarded as the “Pride Of The Northern Province”.",
        "province": "Northern Province"
    },
    {
        "id": 72,
        "chapterName": "Gamma Gamma",
        "charterYear": "1948",
        "universityName": "Talladega College",
        "city": "Talladega, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 73,
        "chapterName": "Gamma Delta",
        "charterYear": "1948",
        "universityName": "Livingstone College",
        "city": "Salisbury, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 74,
        "chapterName": "Gamma Epsilon",
        "charterYear": "1948",
        "universityName": "Tuskegee University",
        "city": "Tuskegee, Alabama",
        "moreInfo": "Was originally Tuskegee Institute but in 1985 became Tuskegee University",
        "province": "Southern Province"
    },
    {
        "id": 75,
        "chapterName": "Gamma Zeta",
        "charterYear": "1948",
        "universityName": "Fort Valley State University",
        "city": "Fort Valley, Georgia",
        "moreInfo": "Was originally Fort Valley State College, but in 1996 became Fort Valley State University (FVSU)",
        "province": "Southeastern Province"
    },
    {
        "id": 76,
        "chapterName": "Gamma Eta",
        "charterYear": "1948",
        "universityName": "University of Washington",
        "city": "Seattle, Washington",
        "province": "Western Province"
    },
    {
        "id": 77,
        "chapterName": "Gamma Theta",
        "charterYear": "1948",
        "universityName": "Bethune-Cookman University",
        "city": "Daytona Beach, Florida",
        "moreInfo": "Was originally Bethune-Cookman College but in 2007 became Bethune-Cookman University (BCU)",
        "province": "Southern Province"
    },
    {
        "id": 78,
        "chapterName": "Gamma Iota",
        "charterYear": "1948",
        "universityName": "Arizona State University",
        "city": "Tempe, Arizona",
        "province": "Western Province"
    },
    {
        "id": 79,
        "chapterName": "Gamma Kappa",
        "charterYear": "1948",
        "universityName": "Clark Atlanta University",
        "city": "Atlanta, Georgia",
        "moreInfo": "Was originally Clark College but in 1988 became Clark Atlanta University (CAU)",
        "province": "Southeastern Province"
    },
    {
        "id": 80,
        "chapterName": "Gamma Lambda",
        "charterYear": "1949",
        "universityName": "Huston-Tillotson University",
        "city": "Austin, Texas",
        "moreInfo": "In 1952 Tillotson College and Samuel Huston College merged to form Huston-Tillotson College; in 2005 became Huston-Tillotson University",
        "province": "Southwestern Province"
    },
    {
        "id": 81,
        "chapterName": "Gamma Mu",
        "charterYear": "1949",
        "universityName": "Benedict College",
        "city": "Columbia, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 82,
        "chapterName": "Gamma Nu",
        "charterYear": "1949",
        "universityName": "Claflin College",
        "city": "Orangeburg, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 83,
        "chapterName": "Gamma Xi",
        "charterYear": "1949",
        "universityName": "University of Maryland Eastern Shore",
        "city": "Princess Anne, Maryland",
        "moreInfo": "Was originally Maryland State College but in 1970 became University of Maryland Eastern Shore (UMES). Replaced by the Pi Nu Chapter chartered in 2008.",
        "province": "Eastern Province"
    },
    {
        "id": 84,
        "chapterName": "Gamma Omicron",
        "charterYear": "1949",
        "universityName": "Saint Augustine's College",
        "city": "Raleigh, North Carolina",
        "nickName":"The Beast of the Middle East",
        "province": "Middle Eastern Province"
    },
    {
        "id": 85,
        "chapterName": "Gamma Pi",
        "charterYear": "1949",
        "universityName": "Alcorn State University",
        "city": "Lorman, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 86,
        "chapterName": "Gamma Rho",
        "charterYear": "1949",
        "universityName": "Tougaloo College",
        "city": "Tougaloo, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 87,
        "chapterName": "Gamma Sigma",
        "charterYear": "1949",
        "universityName": "University of Arkansas at Pine Bluff",
        "city": "Pine Bluff, Arkansas",
        "nickName":"Sho Nuff Gangsters",
        "province": "Southwestern Province"
    },
    {
        "id": 88,
        "chapterName": "Gamma Tau",
        "charterYear": "1949",
        "universityName": "Kent State University",
        "city": "Kent, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 89,
        "chapterName": "Gamma Upsilon",
        "charterYear": "1950",
        "universityName": "Southern Illinois University Carbondale",
        "city": "Carbondale, Illinois",
        "nickName":"Mighty Gamma Up",
        "province": "North Central Province"
    },
    {
        "id": 90,
        "chapterName": "Gamma Phi",
        "charterYear": "1950",
        "universityName": "Alabama A&M University",
        "city": "Huntsville, Alabama",
        "nickName":"Phi House",
        "province": "Southern Province"
    },
    {
        "id": 91,
        "chapterName": "Gamma Chi",
        "charterYear": "1950",
        "universityName": "Savannah State University",
        "city": "Savannah, Georgia",
        "moreInfo": "Was originally Savannah State College but in 1996 became Savannah State University",
        "province": "Southeastern Province"
    },
    {
        "id": 92,
        "chapterName": "Gamma Psi",
        "charterYear": "1950",
        "universityName": "Grambling State University",
        "city": "Grambling, Louisiana",
        "moreInfo": "Was originally Colored Industrial and Agriculutal School (1901), North Louisiana Agriculutal and Industrial School(1905), Louisiana Negro Normal and Industrial Institute (1928), Grambling College (1946).",
        "province": "Southwestern Province"
    },
    {
        "id": 93,
        "chapterName": "Gamma Omega",
        "charterYear": "1950",
        "universityName": "Cheyney University",
        "city": "Cheyney, Pennsylvania",
        "nickName":"The Tip of the Bloody Triangle / The Mafia Chapter",
        "moreInfo": "Was originally Cheyney Training School for Teachers but in 1951 became Cheyney State Teacher’s College; in 1959 it became Cheyney State College; and, in 1983, Cheyney University of Pennsylvania;— commonly known as Cheyney University",
        "province": "Northeastern Province"
    },
    {
        "id": 94,
        "chapterName": "Delta Alpha",
        "charterYear": "1950",
        "universityName": "Portland State University",
        "city": "Portland, Oregon",
        "moreInfo": "Includes (But not limited to) University Of Oregon, Portland State University, University Of Portland, Willamette University, Concordia University, Lewis and Clark College and Warner Pacific College",
        "province": "Western Province"
    },
    {
        "id": 95,
        "chapterName": "Delta Beta",
        "charterYear": "1951",
        "universityName": "Syracuse University",
        "city": "Syracuse, New York",
        "province": "Northern Province"
    },
    {
        "id": 96,
        "chapterName": "Delta Gamma",
        "charterYear": "1951",
        "universityName": "Shaw University",
        "city": "Raleigh, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 97,
        "chapterName": "Delta Delta",
        "charterYear": "1951",
        "universityName": "Jackson State University",
        "city": "Jackson, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 98,
        "chapterName": "Delta Epsilon",
        "charterYear": "1951",
        "universityName": "San Diego State University",
        "city": "San Diego, California",
        "province": "Western Province"
    },
    {
        "id": 99,
        "chapterName": "Delta Zeta",
        "charterYear": "1952",
        "universityName": "Central State University",
        "city": "Wilberforce, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 100,
        "chapterName": "Delta Eta",
        "charterYear": "1952",
        "universityName": "University of Pennsylvania",
        "city": "Philadelphia, Pennsylvania",
        "moreInfo": "One-collective chapter for University of Pennsylvania, Drexel University, Villanova University, Saint Joseph's University, and Arcadia University",
        "province": "Northeastern Province"
    },
    {
        "id": 101,
        "chapterName": "Delta Theta",
        "charterYear": "1952",
        "universityName": "Pennsylvania State University",
        "city": "University Park, Pennsylvania",
        "nickName":"Dynamic Delta Theta",
        "moreInfo": "Was originally Pennsylvania State College but in 1953 became Pennsylvania State University;— also known as Penn State or PSU",
        "province": "Northeastern Province"
    },
    {
        "id": 102,
        "chapterName": "Delta Iota",
        "charterYear": "1953",
        "universityName": "Ball State University",
        "nickName":"Sly D.I.",
        "city": "Muncie, Indiana",
        "province": "North Central Province"
    },
    {
        "id": 103,
        "chapterName": "Delta Kappa",
        "charterYear": "1954",
        "universityName": "Marquette University",
        "city": "Milwaukee, Wisconsin",
        "moreInfo": "This chapter also covers University of Wisconsin-Milwaukee - Milwaukee, WI, and University of Wisconsin-Parkside - Kenosha, Wisconsin",
        "province": "North Central Province"
    },
    {
        "id": 104,
        "chapterName": "Delta Lambda",
        "charterYear": "1954",
        "universityName": "St. Paul's College",
        "city": "Lawrenceville, Virginia",
        "moreInfo": "School ceased operations on June 30, 2013",
        "province": "Eastern Province"
    },
    {
        "id": 105,
        "chapterName": "Delta Mu",
        "charterYear": "1955",
        "universityName": "Long Island University, Brooklyn",
        "city": "Brooklyn, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 106,
        "chapterName": "Delta Nu",
        "charterYear": "1955",
        "universityName": "Eastern Michigan University",
        "city": "Ypsilanti, Michigan",
        "nickName":"The Death Chapter - Pride of the Northern Province",
        "moreInfo": "Founded in 1849, Michigan State Normal College became Eastern Michigan University (EMU) in 1956.",
        "province": "Northern Province"
    },
    {
        "id": 107,
        "chapterName": "Delta Xi",
        "charterYear": "1956",
        "universityName": "Albany State University",
        "city": "Albany, Georgia",
        "nickName":"The Detrimental Delta Xi Chapter",
        "moreInfo": "Was originally Albany State College but in 1996 became Albany State University",
        "province": "Southeastern Province"
    },
    {
        "id": 108,
        "chapterName": "Delta Omicron",
        "charterYear": "1956",
        "universityName": "University of Arizona",
        "city": "Tucson, Arizona",
        "province": "Western Province"
    },
    {
        "id": 109,
        "chapterName": "Delta Pi",
        "charterYear": "1956",
        "universityName": "Michigan State University",
        "city": "East Lansing, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 110,
        "chapterName": "Delta Rho",
        "charterYear": "1956",
        "universityName": "San Jose State University",
        "city": "San Jose, California",
        "moreInfo": "Was originally San Jose State College, then the school name was changed to California State University, San Jose, and finally San Jose State University",
        "province": "Western Province"
    },
    {
        "id": 111,
        "chapterName": "Delta Sigma",
        "charterYear": "1956",
        "universityName": "Bishop College",
        "city": "Marshall, Texas",
        "moreInfo": "Bishop College moved to Dallas in 1961; the college closed in 1988",
        "province": "Southwestern Province"
    },
    {
        "id": 112,
        "chapterName": "Delta Tau",
        "charterYear": "1957",
        "universityName": "Miles College",
        "city": "Birmingham, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 113,
        "chapterName": "Delta Upsilon",
        "charterYear": "1958",
        "universityName": "Wichita State University",
        "city": "Wichita, Kansas",
        "moreInfo": "Started out as the Municipal University of Wichita then became known as Wichita University (WU); in 1964 it became Wichita State University (WSU)",
        "province": "Middle Western Province"
    },
    {
        "id": 114,
        "chapterName": "Delta Phi",
        "charterYear": "1958",
        "universityName": "Indiana Institute of Technology",
        "city": "Fort Wayne, Indiana",
        "province": "North Central Province"
    },
    {
        "id": 115,
        "chapterName": "Delta Chi",
        "charterYear": "1960",
        "universityName": "Winston-Salem State University",
        "city": "Winston-Salem, North Carolina",
        "nickName":"Death Chapter",
        "moreInfo": "Was originally Winston-Salem Teachers College but in 1969 became Winston-Salem State University",
        "province": "Middle Eastern Province"
    },
    {
        "id": 116,
        "chapterName": "Delta Psi",
        "charterYear": "1960",
        "universityName": "Edward Waters College",
        "city": "Jacksonville, Florida",
        "province": "Southern Province"
    },
    {
        "id": 117,
        "chapterName": "Delta Omega",
        "charterYear": "1961",
        "universityName": "University of Missouri",
        "city": "Columbia, Missouri",
        "province": "Middle Western Province"
    },
    {
        "id": 118,
        "chapterName": "Epsilon Alpha",
        "charterYear": "1961",
        "universityName": "Elizabeth City State University",
        "city": "Elizabeth City, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 119,
        "chapterName": "Epsilon Beta",
        "charterYear": "1962",
        "universityName": "Fayetteville State University",
        "city": "Fayetteville, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 120,
        "chapterName": "Epsilon Gamma",
        "charterYear": "1963",
        "universityName": "University of Central Oklahoma",
        "city": "Edmond, Oklahoma",
        "nickName":"Wolfpack",
        "moreInfo": "Was originally Central State College but in 1971 became Central State University; in 1991 became University of Central Oklahoma (UCO)",
        "province": "Middle Western Province"
    },
    {
        "id": 121,
        "chapterName": "Epsilon Delta",
        "charterYear": "1962",
        "universityName": "Marshall University",
        "city": "Huntington, West Virginia",
        "province": "East Central Province"
    },
    {
        "id": 122,
        "chapterName": "Epsilon Epsilon",
        "charterYear": "1963",
        "universityName": "Stillman College",
        "city": "Tuscaloosa, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 123,
        "chapterName": "Epsilon Zeta",
        "charterYear": "1963",
        "universityName": "Norfolk State University",
        "city": "Norfolk, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 124,
        "chapterName": "Epsilon Eta",
        "charterYear": "1963",
        "universityName": "Truman State University",
        "city": "Kirksville, Missouri",
        "moreInfo": "Was originally Northeast Missouri State Teachers College but in 1968 became Northeast Missouri State College; in 1972 became Northeast Missouri State University; in 1996 became Truman State University",
        "province": "Middle Western Province"
    },
    {
        "id": 125,
        "chapterName": "Epsilon Theta",
        "charterYear": "1964",
        "universityName": "Idaho State University",
        "city": "Pocatello, Idaho",
        "province": "Western Province"
    },
    {
        "id": 126,
        "chapterName": "Epsilon Iota",
        "charterYear": "1965",
        "universityName": "University of Evansville",
        "city": "Evansville, Indiana",
        "province": "North Central Province"
    },
    {
        "id": 127,
        "chapterName": "Epsilon Kappa",
        "charterYear": "1965",
        "universityName": "California State University, Long Beach",
        "city": "Los Angeles, California",
        "moreInfo": "Was originally California State College at Long Beach but in 1968 became California State College, Long Beach; in 1972 became California State University, Long Beach (CSULB)",
        "province": "Western Province"
    },
    {
        "id": 128,
        "chapterName": "Epsilon Lambda",
        "charterYear": "1966",
        "universityName": "Ohio University",
        "city": "Athens, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 129,
        "chapterName": "Epsilon Mu",
        "charterYear": "1966",
        "universityName": "Florida Memorial University",
        "city": "Miami Gardens, Florida",
        "moreInfo": "Was originally Florida Memorial College but in 2004 became Florida Memorial University",
        "province": "Southern Province"
    },
    {
        "id": 130,
        "chapterName": "Epsilon Nu",
        "charterYear": "1968",
        "universityName": "Southern University at New Orleans",
        "city": "New Orleans, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 131,
        "chapterName": "Epsilon Xi",
        "charterYear": "1968",
        "universityName": "Northern Michigan University",
        "city": "Marquette, Michigan",
        "nickName":"The Hawk Chapter",
        "province": "Northern Province"
    },
    {
        "id": 132,
        "chapterName": "Epsilon Omicron",
        "charterYear": "1968",
        "universityName": "Northern Illinois University",
        "city": "Dekalb, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 133,
        "chapterName": "Epsilon Pi",
        "charterYear": "1968",
        "universityName": "West Texas A&M University",
        "city": "Canyon, Texas",
        "moreInfo": "Was originally West Texas State University but in 1990 became West Texas A&M University (WTAMU)",
        "province": "Southwestern Province"
    },
    {
        "id": 134,
        "chapterName": "Epsilon Rho",
        "charterYear": "1969",
        "universityName": "Western Kentucky University",
        "city": "Bowling Green, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 135,
        "chapterName": "Epsilon Sigma",
        "charterYear": "1969",
        "universityName": "Bowie State University",
        "city": "Bowie, Maryland",
        "province": "Eastern Province"
    },
    {
        "id": 136,
        "chapterName": "Epsilon Tau",
        "charterYear": "1969",
        "universityName": "Ferris State University",
        "city": "Big Rapids, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 137,
        "chapterName": "Epsilon Upsilon",
        "charterYear": "1969",
        "universityName": "Northern Arizona University",
        "city": "Flagstaff, Arizona",
        "province": "Western Province"
    },
    {
        "id": 138,
        "chapterName": "Epsilon Phi",
        "charterYear": "1969",
        "universityName": "McNeese State University",
        "city": "Lake Charles, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 139,
        "chapterName": "Epsilon Chi",
        "charterYear": "1970",
        "universityName": "West Virginia University",
        "city": "Morgantown, West Virginia",
        "province": "East Central Province"
    },
    {
        "id": 140,
        "chapterName": "Epsilon Psi",
        "charterYear": "1970",
        "universityName": "Paine College",
        "city": "Augusta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 141,
        "chapterName": "Epsilon Omega",
        "charterYear": "1970",
        "universityName": "Voorhees College",
        "city": "Denmark, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 142,
        "chapterName": "Zeta Alpha",
        "charterYear": "1970",
        "universityName": "Indiana University Northwest",
        "city": "Gary, Indiana",
        "province": "North Central Province"
    },
    {
        "id": 143,
        "chapterName": "Zeta Beta",
        "charterYear": "1970",
        "universityName": "Prairie View A&M University",
        "city": "Prairie View, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 144,
        "chapterName": "Zeta Gamma",
        "charterYear": "1970",
        "universityName": "Coppin State University",
        "city": "Baltimore, Maryland",
        "moreInfo": "Was originally Coppin State College but in 2004 became Coppin State University",
        "province": "Eastern Province"
    },
    {
        "id": 145,
        "chapterName": "Zeta Delta",
        "charterYear": "1970",
        "universityName": "University of North Carolina at Charlotte",
        "city": "Charlotte, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 146,
        "chapterName": "Zeta Epsilon",
        "charterYear": "1970",
        "universityName": "University of South Carolina",
        "city": "Columbia, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 147,
        "chapterName": "Zeta Zeta",
        "charterYear": "1970",
        "universityName": "Mississippi Valley State University",
        "city": "Itta Bena, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 148,
        "chapterName": "Zeta Eta",
        "charterYear": "1971",
        "universityName": "California University of Pennsylvania",
        "city": "California, Pennsylvania",
        "province": "East Central Province"
    },
    {
        "id": 149,
        "chapterName": "Zeta Theta",
        "charterYear": "1971",
        "universityName": "Oklahoma State University-Stillwater",
        "city": "Stillwater, Oklahoma",
        "province": "Middle Western Province"
    },
    {
        "id": 150,
        "chapterName": "Zeta Iota",
        "charterYear": "1971",
        "universityName": "University of Georgia",
        "city": "Athens, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 151,
        "chapterName": "Zeta Kappa",
        "charterYear": "1971",
        "universityName": "University of Tennessee at Martin",
        "city": "Martin, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 152,
        "chapterName": "Zeta Lambda",
        "charterYear": "1971",
        "universityName": "Morehead State University",
        "city": "Morehead, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 153,
        "chapterName": "Zeta Mu",
        "charterYear": "1971",
        "universityName": "Western Illinois University",
        "city": "Macomb, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 154,
        "chapterName": "Zeta Nu",
        "charterYear": "1971",
        "universityName": "Bowling Green State University",
        "city": "Bowling Green, Ohio",
        "province": "Northern Province"
    },
    {
        "id": 155,
        "chapterName": "Zeta Xi",
        "charterYear": "1971",
        "universityName": "Jarvis Christian College",
        "city": "Hawkins, Texas",
        "nickName":"The Midnight Chapter",
        "province": "Southwestern Province"
    },
    {
        "id": 156,
        "chapterName": "Zeta Omicron",
        "charterYear": "1972",
        "universityName": "Rust College",
        "city": "Holly Springs, Mississippi",
        "nickName":"The Zombies",
        "province": "South Central Province"
    },
    {
        "id": 157,
        "chapterName": "Zeta Pi",
        "charterYear": "1972",
        "universityName": "Southern Illinois University Edwardsville",
        "city": "Edwardsville, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 158,
        "chapterName": "Zeta Rho",
        "charterYear": "1972",
        "universityName": "Northeastern State University",
        "city": "Tahlequah, Oklahoma",
        "moreInfo": "Was originally Northeastern State Normal School but in 1974 became Northeastern Oklahoma State University; in 1985 it became Northeastern State University",
        "province": "Middle Western Province"
    },
    {
        "id": 159,
        "chapterName": "Zeta Sigma",
        "charterYear": "1972",
        "universityName": "Barber-Scotia College",
        "city": "Concord, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 160,
        "chapterName": "Zeta Tau",
        "charterYear": "1972",
        "universityName": "Central Missouri State University",
        "city": "Warrensburg, Missouri",
        "nickName":"The Untouchables",
        "province": "Middle Western Province"
    },
    {
        "id": 161,
        "chapterName": "Zeta Upsilon",
        "charterYear": "1972",
        "universityName": "University of North Texas",
        "city": "Denton, Texas",
        "moreInfo": "Was originally North Texas State University but in 1989 became University of North Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 162,
        "chapterName": "Zeta Phi",
        "charterYear": "1972",
        "universityName": "University of Florida",
        "city": "Gainesville, Florida",
        "moreInfo": "Known as the \"Pearl of the South\" and \"The Hospitality Chapter\"",
        "province": "Southern Province"
    },
    {
        "id": 163,
        "chapterName": "Zeta Chi",
        "charterYear": "1973",
        "universityName": "University of South Florida",
        "city": "Tampa, Florida",
        "province": "Southern Province"
    },
    {
        "id": 164,
        "chapterName": "Zeta Psi",
        "charterYear": "1973",
        "universityName": "Lamar University",
        "city": "Beaumont, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 165,
        "chapterName": "Zeta Omega",
        "charterYear": "1973",
        "universityName": "University of Oklahoma",
        "city": "Norman, Oklahoma",
        "province": "Middle Western Province"
    },
    {
        "id": 166,
        "chapterName": "Eta Alpha",
        "charterYear": "1973",
        "universityName": "Eastern Kentucky University",
        "city": "Richmond, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 167,
        "chapterName": "Eta Beta",
        "charterYear": "1973",
        "universityName": "Murray State University",
        "city": "Murray, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 168,
        "chapterName": "Eta Gamma",
        "charterYear": "1973",
        "universityName": "Middle Tennessee State University",
        "city": "Murfreesboro, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 169,
        "chapterName": "Eta Delta",
        "charterYear": "1974",
        "universityName": "The College of New Jersey",
        "city": "Trenton, New Jersey",
        "moreInfo": "Was originally Trenton State College but in 1996 became The College of New Jersey; Metro chapter for The College of New Jersey, Rider University, & Princeton University",
        "province": "Northeastern Province"
    },
    {
        "id": 170,
        "chapterName": "Eta Epsilon",
        "charterYear": "1974",
        "universityName": "Rutgers–New Brunswick",
        "city": "New Brunswick, New Jersey",
        "province": "Northeastern Province"
    },
    {
        "id": 171,
        "chapterName": "Eta Zeta",
        "charterYear": "1974",
        "universityName": "University of California, Riverside",
        "city": "Riverside, California",
        "province": "Western Province"
    },
    {
        "id": 172,
        "chapterName": "Eta Eta",
        "charterYear": "1974",
        "universityName": "Kettering University",
        "city": "Flint, Michigan",
        "moreInfo": "Was originally the General Motors Institute but in 1982 became GMI Engineering & Management Institute; in 1998 became Kettering University",
        "province": "Northern Province"
    },
    {
        "id": 173,
        "chapterName": "Eta Theta",
        "charterYear": "1974",
        "universityName": "Columbus State University",
        "city": "Columbus, Georgia",
        "nickName":"Fountain City Nupes",
        "moreInfo": "Was originally Columbus College but in 1996 became Columbus State University (CSU)",
        "province": "Southeastern Province"
    },
    {
        "id": 174,
        "chapterName": "Eta Iota",
        "charterYear": "1974",
        "universityName": "College of Charleston",
        "city": "Charleston, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 175,
        "chapterName": "Eta Kappa",
        "charterYear": "1974",
        "universityName": "Culver-Stockton College",
        "city": "Canton, Missouri",
        "province": "Middle Western Province"
    },
    {
        "id": 176,
        "chapterName": "Eta Lambda",
        "charterYear": "1974",
        "universityName": "University of Houston",
        "city": "Houston, Texas",
        "nickName":"The World Famous Space City Nupes",
        "province": "Southwestern Province"
    },
    {
        "id": 177,
        "chapterName": "Eta Mu",
        "charterYear": "1974",
        "universityName": "Jacksonville State University",
        "city": "Jacksonville, Alabama",
        "nickName":"House of Madness",
        "province": "Southern Province"
    },
    {
        "id": 178,
        "chapterName": "Eta Nu",
        "charterYear": "1974",
        "universityName": "University of South Alabama",
        "city": "Mobile, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 179,
        "chapterName": "Eta Xi",
        "charterYear": "1974",
        "universityName": "Virginia Commonwealth University",
        "city": "Richmond, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 180,
        "chapterName": "Eta Omicron",
        "charterYear": "1974",
        "universityName": "Cameron University",
        "city": "Lawton, Oklahoma",
        "moreInfo": "Was originally Cameron State School of Agriculture but in 1971 became Cameron College; in 1974 became Cameron University. [note 1]",
        "province": "Middle Western Province"
    },
    {
        "id": 181,
        "chapterName": "Eta Pi",
        "charterYear": "1974",
        "universityName": "Northeast Louisiana University",
        "city": "Monroe, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 182,
        "chapterName": "Eta Rho",
        "charterYear": "1974",
        "universityName": "Central Michigan University",
        "city": "Mount Pleasant, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 183,
        "chapterName": "Eta Sigma",
        "charterYear": "1974",
        "universityName": "University of Virginia",
        "city": "Charlottesville, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 184,
        "chapterName": "Eta Tau",
        "charterYear": "1974",
        "universityName": "Texas A&M University–Kingsville",
        "city": "Kingsville, Texas",
        "moreInfo": "Was originally Texas A&I University but in 1993 became Texas A&M University–Kingsville",
        "province": "Southwestern Province"
    },
    {
        "id": 185,
        "chapterName": "Eta Upsilon",
        "charterYear": "1974",
        "universityName": "Mississippi State University",
        "city": "Starkville, Mississippi",
        "nickName":"The Gucci Chapter",
        "province": "Southwestern Province"
    },
    {
        "id": 186,
        "chapterName": "Eta Phi",
        "charterYear": "1975",
        "universityName": "Texas A&M University–Commerce",
        "city": "Commerce, Texas",
        "moreInfo": "Was chartered at East Texas State University but in 1996 became Texas A&M University–Commerce",
        "province": "Southwestern Province"
    },
    {
        "id": 187,
        "chapterName": "Eta Chi",
        "charterYear": "1975",
        "universityName": "University of Alabama",
        "city": "Tuscaloosa, Alabama",
        "nickName":"The Glowing Diamond",
        "province": "Southern Province"
    },
    {
        "id": 188,
        "chapterName": "Eta Psi",
        "charterYear": "1975",
        "universityName": "East Carolina University",
        "city": "Greenville, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 189,
        "chapterName": "Eta Omega",
        "charterYear": "1975",
        "universityName": "Old Dominion University",
        "city": "Norfolk, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 190,
        "chapterName": "Theta Alpha",
        "charterYear": "1975",
        "universityName": "Henderson State University",
        "city": "Arkadelphia, Arkansas",
        "nickName":"Lady Takers",
        "province": "Southwestern Province"
    },
    {
        "id": 191,
        "chapterName": "Theta Beta",
        "charterYear": "1975",
        "universityName": "Austin Peay State University",
        "city": "Clarksville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 192,
        "chapterName": "Theta Delta",
        "charterYear": "1975",
        "universityName": "Auburn University",
        "city": "Auburn, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 193,
        "chapterName": "Theta Epsilon",
        "charterYear": "1975",
        "universityName": "University of Arkansas at Little Rock",
        "city": "Little Rock, Arkansas",
        "nickName":"Too Kool Chapter",
        "province": "Southwestern Province"
    },
    {
        "id": 194,
        "chapterName": "Theta Zeta",
        "charterYear": "1975",
        "universityName": "Chicago State University",
        "city": "Chicago, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 195,
        "chapterName": "Theta Eta",
        "charterYear": "1975",
        "universityName": "Florida State University",
        "city": "Tallahassee, Florida",
        "nickName":"The Flagship Chapter",
        "province": "Southern Province"
    },
    {
        "id": 196,
        "chapterName": "Theta Theta",
        "charterYear": "1975",
        "universityName": "University of Maryland, College Park",
        "city": "College Park, Maryland",
        "province": "Eastern Province"
    },
    {
        "id": 197,
        "chapterName": "Theta Iota",
        "charterYear": "1975",
        "universityName": "Massachusetts Institute of Technology",
        "city": "Cambridge, Massachusetts",
        "nickName":"Too Ill Chapter",
        "province": "Northeastern Province"
    },
    {
        "id": 198,
        "chapterName": "Theta Kappa",
        "charterYear": "1975",
        "universityName": "University of West Georgia",
        "city": "Carrollton, Georgia",
        "moreInfo": "Was originally West Georgia College but in 1978 became University of West Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 199,
        "chapterName": "Theta Lambda",
        "charterYear": "1975",
        "universityName": "Northwestern State University",
        "city": "Natchitoches, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 200,
        "chapterName": "Theta Mu",
        "charterYear": "1975",
        "universityName": "Arkansas State University",
        "city": "Jonesboro, Arkansas",
        "nickName":"The Dirty",
        "province": "Southwestern Province"
    },
    {
        "id": 201,
        "chapterName": "Theta Nu",
        "charterYear": "1975",
        "universityName": "University of Louisiana at Lafayette",
        "city": "Lafayette, Louisiana",
        "moreInfo": "Was originally University of Southwestern Louisiana but in 1999 became University of Louisiana at Lafayette",
        "province": "Southwestern Province"
    },
    {
        "id": 202,
        "chapterName": "Theta Xi",
        "charterYear": "1976",
        "universityName": "University of Texas at El Paso",
        "city": "El Paso, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 203,
        "chapterName": "Theta Omicron",
        "charterYear": "1976",
        "universityName": "University of North Carolina",
        "city": "Chapel Hill, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 204,
        "chapterName": "Theta Pi",
        "charterYear": "1976",
        "universityName": "Mercer University",
        "city": "Macon, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 205,
        "chapterName": "Theta Rho",
        "charterYear": "1976",
        "universityName": "Louisiana Tech University",
        "city": "Ruston, Louisiana",
        "moreInfo": "Replaced by the Pi Delta Chapter chartered in 2007.",
        "province": "Southwestern Province"
    },
    {
        "id": 206,
        "chapterName": "Theta Sigma",
        "charterYear": "1976",
        "universityName": "University of Nevada, Las Vegas",
        "city": "Las Vegas, Nevada",
        "province": "Western Province"
    },
    {
        "id": 207,
        "chapterName": "Theta Tau",
        "charterYear": "1976",
        "universityName": "Howard University Graduate and Professional Schools",
        "city": "Washington D.C.",
        "moreInfo": "The second \"Intermediate Chapter\" in the fraternity. Composed of graduate and professional school students enrolled in programs at universities within the greater Washington DC metropolitan area.",
        "province": "Eastern Province"
    },
    {
        "id": 208,
        "chapterName": "Theta Upsilon",
        "charterYear": "1976",
        "universityName": "University of North Alabama",
        "city": "Florence, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 209,
        "chapterName": "Theta Phi",
        "charterYear": "1976",
        "universityName": "Troy State University",
        "city": "Troy, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 210,
        "chapterName": "Theta Chi",
        "charterYear": "1976",
        "universityName": "University of Maryland, Baltimore County",
        "city": "Baltimore, Maryland",
        "province": "Eastern Province"
    },
    {
        "id": 211,
        "chapterName": "Theta Psi",
        "charterYear": "1977",
        "universityName": "Virginia Tech",
        "city": "Blacksburg, Virginia",
        "moreInfo": "Virginia Polytechnic Institute and State University (its official formal title; it is more frequently referred to using its alternative title Virginia Tech (VT), which the school authorized for official use in the early 1990s). Was originally a joint chapter with Radford University.",
        "province": "Eastern Province"
    },
    {
        "id": 212,
        "chapterName": "Theta Omega",
        "charterYear": "1977",
        "universityName": "New Mexico State University",
        "city": "Las Cruces, New Mexico",
        "province": "Southwestern Province"
    },
    {
        "id": 213,
        "chapterName": "Iota Alpha",
        "charterYear": "1977",
        "universityName": "University of Texas at Arlington",
        "city": "Arlington, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 214,
        "chapterName": "Iota Beta",
        "charterYear": "1977",
        "universityName": "California State University, Sacramento",
        "city": "Sacramento, California",
        "province": "Western Province"
    },
    {
        "id": 215,
        "chapterName": "Iota Gamma",
        "charterYear": "1977",
        "universityName": "University of Central Arkansas",
        "city": "Conway, Arkansas",
        "nickName": "The Ladies' Choice",
        "province": "Southwestern Province"
    },
    {
        "id": 216,
        "chapterName": "Iota Delta",
        "charterYear": "1977",
        "universityName": "University of Texas at Austin",
        "city": "Austin, Texas",
        "nickName":"Kappatol City Nupes / Instant Death",
        "province": "Southwestern Province"
    },
    {
        "id": 217,
        "chapterName": "Iota Epsilon",
        "charterYear": "1978",
        "universityName": "Montclair State University",
        "city": "Upper Montclair, New Jersey",
        "moreInfo": "Was originally Montclair State College but in 1994 became Montclair State University",
        "province": "Northeastern Province"
    },
    {
        "id": 218,
        "chapterName": "Iota Zeta",
        "charterYear": "1978",
        "universityName": "East Tennessee State University",
        "city": "Johnson City, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 219,
        "chapterName": "Iota Eta",
        "charterYear": "1978",
        "universityName": "West Virginia University Institute of Technology",
        "city": "Montgomery, West Virginia",
        "moreInfo": "Was originally West Virginia Institute of Technology but in 1996 became West Virginia University Institute of Technology (WVU Tech)",
        "province": "East Central Province"
    },
    {
        "id": 220,
        "chapterName": "Iota Theta",
        "charterYear": "1978",
        "universityName": "University of West Alabama",
        "city": "Livingston, Alabama",
        "moreInfo": "Was originally Livingston University but in 1997 became University of West Alabama",
        "province": "Southern Province"
    },
    {
        "id": 221,
        "chapterName": "Iota Iota",
        "charterYear": "1978",
        "universityName": "Oregon State University",
        "city": "Corvallis, Oregon",
        "province": "Western Province"
    },
    {
        "id": 222,
        "chapterName": "Iota Kappa",
        "charterYear": "1978",
        "universityName": "Bradley University",
        "city": "Peoria, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 223,
        "chapterName": "Iota Lambda",
        "charterYear": "1978",
        "universityName": "Lewis University",
        "city": "Romeoville, Illinois",
        "nickName":"Ice Chapter",
        "province": "North Central Province"
    },
    {
        "id": 224,
        "chapterName": "Iota Mu",
        "charterYear": "1978",
        "universityName": "University of Dayton",
        "city": "Dayton, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 225,
        "chapterName": "Iota Nu",
        "charterYear": "1979",
        "universityName": "Baldwin-Wallace College",
        "city": "Berea, Ohio",
        "moreInfo": "Includes Oberlin College",
        "province": "East Central Province"
    },
    {
        "id": 226,
        "chapterName": "Iota Xi",
        "charterYear": "1979",
        "universityName": "Duke University",
        "city": "Durham, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 227,
        "chapterName": "Iota Omicron",
        "charterYear": "1979",
        "universityName": "Hofstra University",
        "city": "Hempstead, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 228,
        "chapterName": "Iota Pi",
        "charterYear": "1978",
        "universityName": "Georgia Southern University",
        "city": "Statesboro, Georgia",
        "moreInfo": "Was originally Georgia Southern College but in 1990 became Georgia Southern University (GSU); Replaced by the Omicron Phi chapter chartered in 2005",
        "province": "Southeastern Province"
    },
    {
        "id": 229,
        "chapterName": "Iota Rho",
        "charterYear": "1979",
        "universityName": "Fordham University",
        "city": "New York, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 230,
        "chapterName": "Iota Sigma",
        "charterYear": "1979",
        "universityName": "University of California, Davis",
        "city": "Davis, California",
        "province": "Western Province"
    },
    {
        "id": 231,
        "chapterName": "Iota Tau",
        "charterYear": "1979",
        "universityName": "University of Arkansas",
        "city": "Fayetteville, Arkansas",
        "nickName":"The Hill is Hell",
        "province": "Middle Western Province"
    },
    {
        "id": 232,
        "chapterName": "Iota Upsilon",
        "charterYear": "1979",
        "universityName": "Texas Tech University",
        "city": "Lubbock, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 233,
        "chapterName": "Iota Phi",
        "charterYear": "1978",
        "universityName": "Cornell University",
        "city": "Ithaca, New York",
        "province": "Northern Province"
    },
    {
        "id": 234,
        "chapterName": "Iota Chi",
        "charterYear": "1979",
        "universityName": "University of MiaMichigan",
        "city": "Miami, Florida",
        "province": "Southern Province"
    },
    {
        "id": 235,
        "chapterName": "Iota Psi",
        "charterYear": "1979",
        "universityName": "Salisbury University",
        "city": "Salisbury, Maryland",
        "moreInfo": "Was originally Salisbury State College but in 2001 became Salisbury University",
        "province": "Eastern Province"
    },
    {
        "id": 236,
        "chapterName": "Iota Omega",
        "charterYear": "1980",
        "universityName": "Missouri University of Science and Technology",
        "city": "Rolla, Missouri",
        "moreInfo": "Was originally University of Missouri-Rolla but in 2008 became Missouri University of Science and Technology",
        "province": "Middle Western Province"
    },
    {
        "id": 237,
        "chapterName": "Kappa Alpha",
        "charterYear": "1980",
        "universityName": "Illinois State University",
        "city": "Normal, Illinois",
        "province": "North Central Province"
    },
    {
        "id": 238,
        "chapterName": "Kappa Beta",
        "charterYear": "1980",
        "universityName": "University of Memphis",
        "city": "Memphis, Tennessee",
        "nickName":"\"Konceited\" Kappa Beta",
        "moreInfo": "Was originally Memphis State University but in 1994 became University of Memphis",
        "province": "South Central Province"
    },
    {
        "id": 239,
        "chapterName": "Kappa Gamma",
        "charterYear": "1980",
        "universityName": "West Chester University of Pennsylvania",
        "city": "West Chester, Pennsylvania",
        "nickName":"The Eye of the Bloody Triangle",
        "moreInfo": "Was originally West Chester State College but in 1983 became West Chester University of Pennsylvania (WCUPA)",
        "province": "Northeastern Province"
    },
    {
        "id": 240,
        "chapterName": "Kappa Delta",
        "charterYear": "1980",
        "universityName": "Miami University",
        "city": "Oxford, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 241,
        "chapterName": "Kappa Epsilon",
        "charterYear": "1980",
        "universityName": "Texas Christian University",
        "city": "Fort Worth, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 242,
        "chapterName": "Kappa Zeta",
        "charterYear": "1980",
        "universityName": "Atlanta University-Graduate Division",
        "city": "Atlanta, Georgia",
        "moreInfo": "The third \"Intermediate Chapter\" in the fraternity. Composed of graduate and professional school students enrolled in programs at universities within the Atlanta metropolitan area. In 1998 Clark Atlanta University was formed by the consolidation of Atlanta University, which offered only graduate degrees, and Clark College, a four-year undergraduate institution oriented to the liberal arts.",
        "province": "Southeastern Province"
    },
    {
        "id": 243,
        "chapterName": "Kappa Eta",
        "charterYear": "1980",
        "universityName": "University of Arkansas at Monticello",
        "city": "Monticello, Arkansas",
        "nickName":"None Greater",
        "province": "Southwestern Province"
    },
    {
        "id": 244,
        "chapterName": "Kappa Theta",
        "charterYear": "1980",
        "universityName": "Georgia State University",
        "city": "Atlanta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 245,
        "chapterName": "Kappa Iota",
        "charterYear": "1980",
        "universityName": "University of Southern Mississippi",
        "city": "Hattiesburg, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 246,
        "chapterName": "Kappa Kappa",
        "charterYear": "1980",
        "universityName": "University of Alabama at Birmingham",
        "city": "Birmingham, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 247,
        "chapterName": "Kappa Lambda",
        "charterYear": "1980",
        "universityName": "Clemson University",
        "city": "Clemson, South Carolina",
        "nickName":"The Death Valley Nupes",
        "province": "Southeastern Province"
    },
    {
        "id": 248,
        "chapterName": "Kappa Mu",
        "charterYear": "1980",
        "universityName": "State University of New York at New Paltz",
        "city": "New Paltz, New York",
        "moreInfo": "Was originally State University of New York College of Arts and Science New Paltz but in 1994 became State University of New York at New Paltz. Although this chapter is chartered at SUNY New Paltz, it also includes the United States Military Academy at West Point, Marist College, Iona College, Mercy College and Pace University",
        "province": "Northeastern Province"
    },
    {
        "id": 249,
        "chapterName": "Kappa Nu",
        "charterYear": "1980",
        "universityName": "Sam Houston State University",
        "city": "Huntsville, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 250,
        "chapterName": "Kappa Xi",
        "charterYear": "1980",
        "universityName": "North Carolina State University",
        "city": "Raleigh, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 251,
        "chapterName": "Kappa Omicron",
        "charterYear": "1980",
        "universityName": "California State Polytechnic University",
        "city": "Diamond Bar, California",
        "province": "Western Province"
    },
    {
        "id": 252,
        "chapterName": "Kappa Pi",
        "charterYear": "1980",
        "universityName": "Washington State University",
        "city": "Pullman, Washington",
        "province": "Western Province"
    },
    {
        "id": 253,
        "chapterName": "Kappa Rho",
        "charterYear": "1981",
        "universityName": "State University of New York at Albany York",
        "city": "Albany, New York",
        "moreInfo": "Commonly known as the University at Albany or University at Albany, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 254,
        "chapterName": "Kappa Sigma",
        "charterYear": "1981",
        "universityName": "Western Carolina University",
        "city": "Cullowhee, North Carolina",
        "nickName":"The KUT Chapter",
        "province": "Middle Eastern Province"
    },
    {
        "id": 255,
        "chapterName": "Kappa Tau",
        "charterYear": "1981",
        "universityName": "University of Kentucky",
        "city": "Lexington, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 256,
        "chapterName": "Kappa Upsilon",
        "charterYear": "1981",
        "universityName": "Oakland University",
        "city": "Rochester, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 257,
        "chapterName": "Kappa Phi",
        "charterYear": "1981",
        "universityName": "University of Illinois at Chicago",
        "city": "Chicago, Illinois",
        "nickName":"Kaotik Kappa Phi",
        "moreInfo": "One-collective chapter for Chicago area universities and colleges, with the exception of Chicago State University, Northwestern University, and Loyola University",
        "province": "North Central Province"
    },
    {
        "id": 258,
        "chapterName": "Kappa Chi",
        "charterYear": "1981",
        "universityName": "American University",
        "city": "Washington D.C.",
        "moreInfo": "Although chartered at American University this chapter also covers Georgetown University, The Catholic University of America, and George Washington University",
        "province": "Eastern Province"
    },
    {
        "id": 259,
        "chapterName": "Kappa Psi",
        "charterYear": "1981",
        "universityName": "California State University, Chico",
        "city": "Chico, California",
        "province": "Western Province"
    },
    {
        "id": 260,
        "chapterName": "Kappa Omega",
        "charterYear": "1981",
        "universityName": "Shippensburg University of Pennsylvania",
        "city": "Shippensburg, Pennsylvania",
        "moreInfo": "Was originally Shippensburg State College but in 1983 became Shippensburg University of Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 261,
        "chapterName": "Lambda Alpha",
        "charterYear": "1981",
        "universityName": "Bloomsburg University of Pennsylvania",
        "city": "Bloomsburg, Pennsylvania",
        "moreInfo": "Was originally Bloomsburg State College but in 1983 became Bloomsburg University of Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 262,
        "chapterName": "Lambda Beta",
        "charterYear": "1982",
        "universityName": "University of California, Irvine",
        "city": "Orange County, California",
        "province": "Western Province"
    },
    {
        "id": 263,
        "chapterName": "Lambda Gamma",
        "charterYear": "1982",
        "universityName": "Winthrop University",
        "city": "Rock Hill, South Carolina",
        "moreInfo": "Was originally Winthrop College but in 1993 became Winthrop University",
        "province": "Southeastern Province"
    },
    {
        "id": 264,
        "chapterName": "Lambda Delta",
        "charterYear": "1982",
        "universityName": "Georgia Institute of Technology",
        "city": "Atlanta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 265,
        "chapterName": "Lambda Epsilon",
        "charterYear": "1982",
        "universityName": "Morris College",
        "city": "Sumter, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 266,
        "chapterName": "Lambda Zeta",
        "charterYear": "1982",
        "universityName": "Towson State University",
        "city": "Towson, Maryland",
        "province": "Eastern Province"
    },
    {
        "id": 267,
        "chapterName": "Lambda Eta",
        "charterYear": "1982",
        "universityName": "Indiana University-Purdue University Indianapolis",
        "city": "Indianapolis, Indiana",
        "moreInfo": "Citywide Chapter for Indianapolis. Includes IUPUI, Butler, Marion, Martin, and UIndy.",
        "province": "North Central Province"
    },
    {
        "id": 268,
        "chapterName": "Lambda Theta",
        "charterYear": "1982",
        "universityName": "Southwest Texas State University",
        "city": "San Marcos, Texas",
        "moreInfo": "Southwest Texas State University became Texas State University-San Marcos in 2003.",
        "province": "Southwestern Province"
    },
    {
        "id": 269,
        "chapterName": "Lambda Iota",
        "charterYear": "1982",
        "universityName": "University of Tennessee at ChattanooGeorgia",
        "city": "Chattanooga, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 270,
        "chapterName": "Lambda Kappa",
        "charterYear": "1982",
        "universityName": "Southern Arkansas University",
        "nickName":"Sho Nuff Players",
        "city": "Magnolia, Arkansas",
        "province": "Southwestern Province"
    },
    {
        "id": 271,
        "chapterName": "Lambda Lambda",
        "charterYear": "1982",
        "universityName": "Paul Quinn College",
        "city": "Dallas, Texas",
        "moreInfo": "In 1990, the college moved from Waco to its current campus in Dallas which is located on the former campus of Bishop College",
        "province": "Southwestern Province"
    },
    {
        "id": 272,
        "chapterName": "Lambda Mu",
        "charterYear": "1983",
        "universityName": "Frostburg State University",
        "city": "Frostburg, Maryland",
        "moreInfo": "Was originally Frostburg State College but in 1987 became Frostburg State University, \"Mighty Mighty Lambda Mu\"",
        "province": "Eastern Province"
    },
    {
        "id": 273,
        "chapterName": "Lambda Nu",
        "charterYear": "1983",
        "universityName": "Stanford University",
        "city": "Stanford, California",
        "province": "Western Province"
    },
    {
        "id": 274,
        "chapterName": "Lambda Xi",
        "charterYear": "1983",
        "universityName": "Brown University",
        "city": "Providence, Rhode Island",
        "province": "Northeastern Province"
    },
    {
        "id": 275,
        "chapterName": "Lambda Omicron",
        "charterYear": "1983",
        "universityName": "University of New Orleans",
        "city": "New Orleans, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 276,
        "chapterName": "Lambda Pi",
        "charterYear": "1983",
        "universityName": "University of Mississippi",
        "city": "Oxford, Mississippi",
        "nickName":"The Legendary Lambda Pi",
        "province": "South Central Province"
    },
    {
        "id": 277,
        "chapterName": "Lambda Rho",
        "charterYear": "1983",
        "universityName": "Occidental College",
        "city": "Los Angeles, California",
        "province": "Western Province"
    },
    {
        "id": 278,
        "chapterName": "Lambda Sigma",
        "charterYear": "1983",
        "universityName": "Nicholls State University",
        "city": "Thibodaux, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 279,
        "chapterName": "Lambda Tau",
        "charterYear": "1983",
        "universityName": "Millersville University of Pennsylvania",
        "city": "Millersville, Pennsylvania",
        "moreInfo": "Was originally Millersvilles State College but in 1983 became Millersville University of Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 280,
        "chapterName": "Lambda Upsilon",
        "charterYear": "1983",
        "universityName": "Indiana University of Pennsylvania",
        "city": "Indiana, Pennsylvania",
        "province": "East Central Province"
    },
    {
        "id": 281,
        "chapterName": "Lambda Phi",
        "charterYear": "1983",
        "universityName": "Valdosta State University",
        "city": "Valdosta, Georgia",
        "moreInfo": "Was originally Valdosta State College but in 1993 became Valdosta State University",
        "province": "Southeastern Province"
    },
    {
        "id": 282,
        "chapterName": "Lambda Chi",
        "charterYear": "1984",
        "universityName": "Florida Institute of Technology",
        "city": "Melbourne, Florida",
        "province": "Southern Province"
    },
    {
        "id": 283,
        "chapterName": "Lambda Psi",
        "charterYear": "1984",
        "universityName": "Georgia Southwestern State University",
        "city": "Americus, Georgia",
        "moreInfo": "Was originally Georgia Southwestern College but in 1996 became Georgia Southwestern University",
        "province": "Southeastern Province"
    },
    {
        "id": 284,
        "chapterName": "Lambda Omega",
        "charterYear": "1984",
        "universityName": "University of Central Florida",
        "city": "Orlando, Florida",
        "province": "Southern Province"
    },
    {
        "id": 285,
        "chapterName": "Mu Alpha",
        "charterYear": "1984",
        "universityName": "Emporia State University",
        "city": "Emporia, Kansas",
        "province": "Middle Western Province"
    },
    {
        "id": 286,
        "chapterName": "Mu Beta",
        "charterYear": "1984",
        "universityName": "East Stroudsburg University",
        "city": "East Stroudsburg, Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 287,
        "chapterName": "Mu Gamma",
        "charterYear": "1984",
        "universityName": "DeVry University",
        "city": "Alpharetta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 288,
        "chapterName": "Mu Delta",
        "charterYear": "1984",
        "universityName": "State University of New York at Brockport",
        "city": "Brockport, New York",
        "province": "Northern Province"
    },
    {
        "id": 289,
        "chapterName": "Mu Epsilon",
        "charterYear": "1985",
        "universityName": "Missouri State University",
        "city": "Springfield, Missouri",
        "moreInfo": "Was originally Southwest Missouri State University but in 2005 became Missouri State University",
        "province": "Middle Western Province"
    },
    {
        "id": 290,
        "chapterName": "Mu Zeta",
        "charterYear": "1985",
        "universityName": "Southeast Missouri State University",
        "city": "Cape Girardeau, Missouri",
        "province": "Middle Western Province"
    },
    {
        "id": 291,
        "chapterName": "Mu Eta",
        "charterYear": "1985",
        "universityName": "Northwest Missouri State University",
        "city": "Maryville, Missouri",
        "province": "Middle Western Province"
    },
    {
        "id": 292,
        "chapterName": "Mu Theta",
        "charterYear": "1985",
        "universityName": "Francis Marion University",
        "city": "Florence, South Carolina",
        "moreInfo": "Was originally Francis Marion College but in 1992 became Francis Marion University",
        "province": "Southeastern Province"
    },
    {
        "id": 293,
        "chapterName": "Mu Iota",
        "charterYear": "1985",
        "universityName": "University of North Carolina at Greensboro",
        "city": "Greensboro, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 294,
        "chapterName": "Mu Kappa",
        "charterYear": "1985",
        "universityName": "Binghamton University",
        "city": "Vestal, New York",
        "nickName":"The Lords of Discipline",
        "moreInfo": "Known as State University of New York at Binghamton prior to 1992",
        "province": "Northeastern Province"
    },
    {
        "id": 295,
        "chapterName": "Mu Lambda",
        "charterYear": "1985",
        "universityName": "Weber State College",
        "city": "Ogden, Utah",
        "province": "Western Province"
    },
    {
        "id": 296,
        "chapterName": "Mu Mu",
        "charterYear": "1985",
        "universityName": "George Mason University",
        "city": "Fairfax, Virginia",
        "moreInfo": "The Mighty Mu Mu Chapter, The Kripple Chapter. Originally under the Kappa Chi colony including American University, The Catholic University of America, Georgetown University, and George Washington University",
        "province": "Eastern Province"
    },
    {
        "id": 297,
        "chapterName": "Mu Nu",
        "charterYear": "1985",
        "universityName": "University of North Carolina at Wilmington",
        "city": "Wilmington, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 298,
        "chapterName": "Mu Xi",
        "charterYear": "1986",
        "universityName": "Wittenberg University",
        "city": "Springfield, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 299,
        "chapterName": "Mu Omicron",
        "charterYear": "1986",
        "universityName": "State University of New York College at Old Westbury",
        "city": "Old Westbury, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 300,
        "chapterName": "Mu Pi",
        "charterYear": "1986",
        "universityName": "St. John's University (New York)",
        "city": "Jamaica, New York",
        "moreInfo": "The Mighty Do or Die Mu Pi Chapter, Originally the Delta Mu colony of Long Island University Brooklyn, NY until March 16, 1986",
        "province": "Northeastern Province"
    },
    {
        "id": 301,
        "chapterName": "Mu Rho",
        "charterYear": "1986",
        "universityName": "University of Tennessee at Knoxville",
        "city": "Knoxville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 302,
        "chapterName": "Mu Sigma",
        "charterYear": "1986",
        "universityName": "Stephen F. Austin State University",
        "city": "Nacogdoches, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 303,
        "chapterName": "Mu Tau",
        "charterYear": "1986",
        "universityName": "Mars Hill College",
        "city": "Mars Hill, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 304,
        "chapterName": "Mu Upsilon",
        "charterYear": "1986",
        "universityName": "Appalachian State University",
        "city": "Boone, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 305,
        "chapterName": "Mu Phi",
        "charterYear": "1986",
        "universityName": "Clarion University of Pennsylvania",
        "city": "Clarion, Pennsylvania",
        "province": "East Central Province"
    },
    {
        "id": 306,
        "chapterName": "Mu Chi",
        "charterYear": "1987",
        "universityName": "Dartmouth College",
        "city": "Hanover, New Hampshire",
        "province": "Northeastern Province"
    },
    {
        "id": 307,
        "chapterName": "Mu Psi",
        "charterYear": "1987",
        "universityName": "Georgia College & State University",
        "city": "Milledgeville, Georgia",
        "nickName":"The Heat Factory",
        "moreInfo": "Was chartered at Georgia College but in 1996 name changed to Georgia College & State University",
        "province": "Southeastern Province"
    },
    {
        "id": 308,
        "chapterName": "Mu Omega",
        "charterYear": "1987",
        "universityName": "Sonoma State University",
        "city": "Cotati, California",
        "province": "Western Province"
    },
    {
        "id": 309,
        "chapterName": "Nu Alpha",
        "charterYear": "1987",
        "universityName": "Texas A&M University",
        "city": "College Station, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 310,
        "chapterName": "Nu Beta",
        "charterYear": "1987",
        "universityName": "Southern Methodist University",
        "city": "Dallas, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 311,
        "chapterName": "Nu Gamma",
        "charterYear": "1987",
        "universityName": "Yale University",
        "city": "New Haven, Connecticut",
        "province": "Northeastern Province"
    },
    {
        "id": 312,
        "chapterName": "Nu Delta",
        "charterYear": "1987",
        "universityName": "Emory University",
        "city": "Atlanta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 313,
        "chapterName": "Nu Epsilon",
        "charterYear": "1987",
        "universityName": "University of Missouri-Kansas City",
        "city": "Kansas City, Missouri",
        "province": "Middle Western Province"
    },
    {
        "id": 314,
        "chapterName": "Nu Zeta",
        "charterYear": "1987",
        "universityName": "Edinboro University of Pennsylvania",
        "city": "Edinboro, Pennsylvania",
        "province": "East Central Province"
    },
    {
        "id": 315,
        "chapterName": "Nu Eta",
        "charterYear": "1988",
        "universityName": "Delta State University",
        "city": "Cleveland, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 316,
        "chapterName": "Nu Theta",
        "charterYear": "1988",
        "universityName": "Elon University",
        "city": "Elon, North Carolina",
        "moreInfo": "Was originally Elon College but in 2001 became Elon University",
        "province": "Middle Eastern Province"
    },
    {
        "id": 317,
        "chapterName": "Nu Iota",
        "charterYear": "1988",
        "universityName": "Louisiana State University",
        "city": "Baton Rouge, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 318,
        "chapterName": "Nu Kappa",
        "charterYear": "1988",
        "universityName": "University of Northern Iowa",
        "city": "Cedar Falls, Iowa",
        "nickName":"\"Notorious\" Nu Kappa Chapter",
        "province": "North Central Province"
    },
    {
        "id": 319,
        "chapterName": "Nu Lambda",
        "charterYear": "1988",
        "universityName": "James Madison University",
        "city": "Harrisonburg, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 320,
        "chapterName": "Nu Mu",
        "charterYear": "1988",
        "universityName": "University of Alabama in Huntsville",
        "city": "Huntsville, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 321,
        "chapterName": "Nu Nu",
        "charterYear": "1988",
        "universityName": "University of South Carolina Aiken",
        "city": "Aiken, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 322,
        "chapterName": "Nu Xi",
        "charterYear": "1989",
        "universityName": "University of Delaware",
        "city": "Newark, Delaware",
        "nickName":"The Eye of the Bloody Triangle",
        "moreInfo": "Was originally a colony of the Beta Sigma Chapter at Delaware State University, from 1975 until 1988.",
        "province": "Northeastern Province"
    },
    {
        "id": 323,
        "chapterName": "Nu Omicron",
        "charterYear": "1989",
        "universityName": "University of North Carolina at Pembroke",
        "city": "Pembroke, North Carolina",
        "moreInfo": "Was originally Pembroke State University but in 1996 became The University of North Carolina at Pembroke",
        "province": "Middle Eastern Province"
    },
    {
        "id": 324,
        "chapterName": "Nu Pi",
        "charterYear": "1989",
        "universityName": "Rensselaer Polytechnic Institute",
        "city": "Troy, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 325,
        "chapterName": "Nu Rho",
        "charterYear": "1989",
        "universityName": "Vanderbilt University",
        "city": "Nashville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 326,
        "chapterName": "Nu Sigma",
        "charterYear": "1989",
        "universityName": "California State University, East Bay",
        "city": "Hayward, California",
        "moreInfo": "Was originally California State University, Hayward but in 2005 the name was changed to California State University, East Bay",
        "province": "Western Province"
    },
    {
        "id": 327,
        "chapterName": "Nu Tau",
        "charterYear": "1989",
        "universityName": "University of Massachusetts Amherst",
        "city": "Amherst, Massachusetts",
        "moreInfo": "One-collective chapter for University of Massachusetts, Amherst College and American International College",
        "province": "Northeastern Province"
    },
    {
        "id": 328,
        "chapterName": "Nu Upsilon",
        "charterYear": "1989",
        "universityName": "University of Michigan–Dearborn",
        "city": "Dearborn, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 329,
        "chapterName": "Nu Phi",
        "charterYear": "1989",
        "universityName": "Lock Haven University of Pennsylvania",
        "city": "Lock Haven, Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 330,
        "chapterName": "Nu Chi",
        "charterYear": "1989",
        "universityName": "Wofford College",
        "city": "Spartanburg, South Carolina",
        "moreInfo": "\"The Night Khapter.\" Was originally Wofford College and University of South Carolina Upstate, until USC Upstate chartered a new chapter. Currently Wofford College and Limestone College",
        "province": "Southeastern Province"
    },
    {
        "id": 331,
        "chapterName": "Nu Psi",
        "charterYear": "1990",
        "universityName": "University of Connecticut",
        "city": "Storrs, Connecticut",
        "province": "Northeastern Province"
    },
    {
        "id": 332,
        "chapterName": "Nu Omega",
        "charterYear": "1990",
        "universityName": "Southeastern Louisiana University",
        "city": "Hammond, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 333,
        "chapterName": "Xi Alpha",
        "charterYear": "1990",
        "universityName": "Centenary College",
        "city": "Shreveport, Louisiana",
        "moreInfo": "One-collective chapter for Centenary College and Louisiana State University - Shreveport.",
        "province": "Southwestern Province"
    },
    {
        "id": 334,
        "chapterName": "Xi Beta",
        "charterYear": "1990",
        "universityName": "Embry-Riddle Aeronautical University",
        "city": "Daytona Beach, Florida",
        "province": "Southern Province"
    },
    {
        "id": 335,
        "chapterName": "Xi Gamma",
        "charterYear": "1990",
        "universityName": "Rowan University",
        "city": "Glassboro, New Jersey",
        "moreInfo": "Was originally Rowan College of New Jersey but in 1997 became Rowan University. This chapter also covers Stockton University — Pomona, NJ. The Northeastern Province website does not explicitly note this, however The Richard Stockton College of NJ's Office of Student Development recognizes it as a student organization",
        "province": "Northeastern Province"
    },
    {
        "id": 336,
        "chapterName": "Xi Delta",
        "charterYear": "1991",
        "universityName": "Princeton University",
        "city": "Princeton, New Jersey",
        "province": "Northeastern Province"
    },
    {
        "id": 337,
        "chapterName": "Xi Epsilon",
        "charterYear": "1991",
        "universityName": "University of Rochester",
        "city": "Rochester, New York",
        "province": "Northern Province"
    },
    {
        "id": 338,
        "chapterName": "Xi Zeta",
        "charterYear": "1991",
        "universityName": "New York Institute of Technology",
        "city": "New York, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 339,
        "chapterName": "Xi Eta",
        "charterYear": "1992",
        "universityName": "Mansfield University",
        "city": "Mansfield, Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 340,
        "chapterName": "Xi Theta",
        "charterYear": "1992",
        "universityName": "College of William and Mary",
        "city": "Williamsburg, Virginia",
        "province": "Eastern Province"
    },
    {
        "id": 341,
        "chapterName": "Xi Iota",
        "charterYear": "1992",
        "universityName": "Saginaw Valley State University",
        "city": "University Center, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 342,
        "chapterName": "Xi Kappa",
        "charterYear": "1992",
        "universityName": "Bucknell University",
        "city": "Lewisburg, Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 343,
        "chapterName": "Xi Lambda",
        "charterYear": "1992",
        "universityName": "University of North Florida",
        "city": "Jacksonville, Florida",
        "province": "Southern Province"
    },
    {
        "id": 344,
        "chapterName": "Xi Mu",
        "charterYear": "1992",
        "universityName": "Wesley College",
        "city": "Dover, Delaware",
        "province": "Northeastern Province"
    },
    {
        "id": 345,
        "chapterName": "Xi Nu",
        "charterYear": "1992",
        "universityName": "Tennessee Technological University",
        "city": "Cookeville, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 346,
        "chapterName": "Xi Xi",
        "charterYear": "1993",
        "universityName": "University of Akron",
        "city": "Akron, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 347,
        "chapterName": "Xi Omicron",
        "charterYear": "1993",
        "universityName": "Long Island University C.W. Post Campus",
        "city": "Brookville, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 348,
        "chapterName": "Xi Pi",
        "charterYear": "1993",
        "universityName": "Newberry College",
        "city": "Newberry, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 349,
        "chapterName": "Xi Rho",
        "charterYear": "1993",
        "universityName": "DePauw University",
        "city": "Greencastle, Indiana",
        "moreInfo": "Originally operated under the Alpha chapter of Indiana University, before gaining its own charter. One-collective chapter for DePauw University and Wabash College.",
        "province": "North Central Province"
    },
    {
        "id": 350,
        "chapterName": "Xi Sigma",
        "charterYear": "1994",
        "universityName": "Baylor University",
        "city": "Waco, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 351,
        "chapterName": "Xi Tau",
        "charterYear": "1995",
        "universityName": "Wright State University",
        "city": "Dayton, Ohio",
        "province": "East Central Province"
    },
    {
        "id": 352,
        "chapterName": "Xi Upsilon",
        "charterYear": "1995",
        "universityName": "University of Montevallo",
        "city": "Montevallo, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 353,
        "chapterName": "Xi Phi",
        "charterYear": "1996",
        "universityName": "University of Nevada at Reno",
        "city": "Reno, Nevada",
        "province": "Western Province"
    },
    {
        "id": 354,
        "chapterName": "Xi Psi",
        "charterYear": "1996",
        "universityName": "University of the Virgin Islands",
        "city": "Saint Thomas, U.S. Virgin Islands",
        "province": "Southern Province"
    },
    {
        "id": 355,
        "chapterName": "Xi Omega",
        "charterYear": "1998",
        "universityName": "Furman University",
        "city": "Greenville, South Carolina",
        "moreInfo": "From 1994 to 1998 operated at Furman University campus under the Gamma Nu chapter of Claflin College, before gaining its own charter. During the 1970s several students at Furman were made at the Zeta Epsilon chapter of the University of South Carolina.",
        "province": "Southeastern Province"
    },
    {
        "id": 356,
        "chapterName": "Omicron Alpha",
        "charterYear": "1998",
        "universityName": "Samford University",
        "city": "Homewood, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 357,
        "chapterName": "Omicron Beta",
        "charterYear": "1999",
        "universityName": "Armstrong State University",
        "city": "Savannah, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 358,
        "chapterName": "Omicron Gamma",
        "charterYear": "1999",
        "universityName": "Florida Atlantic University",
        "city": "Boca Raton, Florida",
        "province": "Southern Province"
    },
    {
        "id": 359,
        "chapterName": "Omicron Delta",
        "charterYear": "1999",
        "universityName": "Jacksonville University",
        "city": "Jacksonville, Florida",
        "province": "Southern Province"
    },
    {
        "id": 360,
        "chapterName": "Omicron Epsilon",
        "charterYear": "1999",
        "universityName": "Christian Brothers University",
        "city": "Memphis, Tennessee",
        "province": "South Central Province"
    },
    {
        "id": 361,
        "chapterName": "Omicron Zeta",
        "charterYear": "1999",
        "universityName": "Colorado State University",
        "city": "Fort Collins, Colorado",
        "moreInfo": "Includes Denver Metropolitan area colleges.",
        "province": "Middle Western Province"
    },
    {
        "id": 362,
        "chapterName": "Omicron Eta",
        "charterYear": "1999",
        "universityName": "Florida Southern College",
        "city": "Lakeland, Florida",
        "province": "Southern Province"
    },
    {
        "id": 363,
        "chapterName": "Omicron Theta",
        "charterYear": "2000",
        "universityName": "Michigan Technological University",
        "city": "Houghton, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 364,
        "chapterName": "Omicron Iota",
        "charterYear": "2001",
        "universityName": "Kennesaw State University",
        "city": "Kennesaw, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 365,
        "chapterName": "Omicron Kappa",
        "charterYear": "2001",
        "universityName": "Lehigh University",
        "city": "Bethlehem, Pennsylvania",
        "moreInfo": "Originally established as a colony of Kappa Gamma in 1987, the Omicron Kappa chapter was charted in 2001 at Lehigh University",
        "province": "Northeastern Province"
    },
    {
        "id": 366,
        "chapterName": "Omicron Lambda",
        "charterYear": "2001",
        "universityName": "Auburn University at Montgomery",
        "city": "Montgomery, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 367,
        "chapterName": "Omicron Mu",
        "charterYear": "2001",
        "universityName": "Charleston Southern University",
        "city": "Charleston, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 368,
        "chapterName": "Omicron Nu",
        "charterYear": "2001",
        "universityName": "Lander University",
        "city": "Greenwood, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 369,
        "chapterName": "Omicron Xi",
        "charterYear": "2002",
        "universityName": "University of Houston–Downtown",
        "city": "Houston, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 370,
        "chapterName": "Omicron Omicron",
        "charterYear": "2002",
        "universityName": "Millsaps College",
        "city": "Jackson, Mississippi",
        "province": "Southwestern Province"
    },
    {
        "id": 371,
        "chapterName": "Omicron Pi",
        "charterYear": "2002",
        "universityName": "University of Colorado at Colorado Springs",
        "city": "Colorado Springs, Colorado",
        "province": "Middle Western Province"
    },
    {
        "id": 372,
        "chapterName": "Omicron Rho",
        "charterYear": "2003",
        "universityName": "Midwestern State University",
        "city": "Wichita Falls, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 373,
        "chapterName": "Omicron Sigma",
        "charterYear": "2004",
        "universityName": "Wake Forest University",
        "city": "Winston-Salem, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 374,
        "chapterName": "Omicron Tau",
        "charterYear": "2004",
        "universityName": "University of Texas at San Antonio",
        "city": "San Antonio, Texas",
        "province": "Southwestern Province"
    },
    {
        "id": 375,
        "chapterName": "Omicron Upsilon",
        "charterYear": "2005",
        "universityName": "Loyola University New Orleans",
        "city": "New Orleans, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 376,
        "chapterName": "Omicron Phi",
        "charterYear": "2005",
        "universityName": "Georgia Southern University",
        "city": "Statesboro, Georgia",
        "moreInfo": "Formerly, the Iota Pi chapter (chartered 1978) was chartered at Georgia Southern College, later Georgia Southern University.",
        "province": "Southeastern Province"
    },
    {
        "id": 377,
        "chapterName": "Omicron Chi",
        "charterYear": "2005",
        "universityName": "Florida International University",
        "city": "Miami, Florida",
        "province": "Southern Province"
    },
    {
        "id": 378,
        "chapterName": "Omicron Psi",
        "charterYear": "2005",
        "universityName": "Florida Gulf Coast University",
        "city": "Fort Myers, Florida",
        "province": "Southern Province"
    },
    {
        "id": 379,
        "chapterName": "Omicron Omega",
        "charterYear": "2005",
        "universityName": "Clayton State University",
        "city": "Morrow, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 380,
        "chapterName": "Pi Alpha",
        "charterYear": "2005",
        "universityName": "University of California, Santa Barbara",
        "city": "Santa Barbara, California",
        "province": "Western Province"
    },
    {
        "id": 381,
        "chapterName": "Pi Beta",
        "charterYear": "2006",
        "universityName": "California State University, Fresno",
        "city": "Fresno, California",
        "province": "Western Province"
    },
    {
        "id": 382,
        "chapterName": "Pi Gamma",
        "charterYear": "2006",
        "universityName": "Coastal Carolina University",
        "city": "Conway, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 383,
        "chapterName": "Pi Delta",
        "charterYear": "2006",
        "universityName": "Louisiana Tech University",
        "city": "Ruston, Louisiana",
        "moreInfo": "Formerly, the Theta Rho Chapter (chartered 1976).",
        "province": "Southwestern Province"
    },
    {
        "id": 384,
        "chapterName": "Pi Epsilon",
        "charterYear": "2006",
        "universityName": "Tulane University",
        "city": "New Orleans, Louisiana",
        "province": "Southwestern Province"
    },
    {
        "id": 385,
        "chapterName": "Pi Zeta",
        "charterYear": "2006",
        "universityName": "Grand Valley State University",
        "city": "Allendale, Michigan",
        "province": "Northern Province"
    },
    {
        "id": 386,
        "chapterName": "Pi Eta",
        "charterYear": "2007",
        "universityName": "Delaware State University",
        "city": "Dover, Delaware",
        "moreInfo": "Originally was the Beta Sigma Chapter, (chartered in 1947) until its letters were retired. Formerly, a part of the Xi Mu Chapter (established there in 1998).",
        "province": "Northeastern Province"
    },
    {
        "id": 387,
        "chapterName": "Pi Theta",
        "charterYear": "2007",
        "universityName": "High Point University",
        "city": "High Point, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 388,
        "chapterName": "Pi Iota",
        "charterYear": "2007",
        "universityName": "Southern Polytechnic State University",
        "city": "Marietta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 389,
        "chapterName": "Pi Kappa",
        "charterYear": "2008",
        "universityName": "Barry University",
        "city": "Miami, Florida",
        "province": "Southern Province"
    },
    {
        "id": 390,
        "chapterName": "Pi Lambda",
        "charterYear": "2008",
        "universityName": "Arkansas Baptist College",
        "city": "Little Rock, Arkansas",
        "province": "Southwestern Province"
    },
    {
        "id": 391,
        "chapterName": "Pi Mu",
        "charterYear": "2008",
        "universityName": "Davidson College",
        "city": "Davidson, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 392,
        "chapterName": "Pi Nu",
        "charterYear": "2008",
        "universityName": "University of Maryland Eastern Shore",
        "city": "Princess Anne, Maryland",
        "moreInfo": "Formerly, the Gamma Xi Chapter (chartered 1949) was based at Maryland State College, later University of Maryland Eastern Shore.",
        "province": "Eastern Province"
    },
    {
        "id": 393,
        "chapterName": "Pi Xi",
        "charterYear": "2009",
        "universityName": "Augusta State University",
        "city": "Augusta, Georgia",
        "province": "Southeastern Province"
    },
    {
        "id": 394,
        "chapterName": "Pi Omicron",
        "charterYear": "2009",
        "universityName": "University of South Carolina Upstate",
        "city": "Spartanburg, South Carolina",
        "province": "Southeastern Province"
    },
    {
        "id": 395,
        "chapterName": "Pi Pi",
        "charterYear": "2009",
        "universityName": "Northern Kentucky University",
        "city": "Highland Heights, Kentucky",
        "province": "South Central Province"
    },
    {
        "id": 396,
        "chapterName": "Pi Rho",
        "charterYear": "2009",
        "universityName": "Stony Brook University",
        "city": "Stony Brook, New York",
        "province": "Northeastern Province"
    },
    {
        "id": 397,
        "chapterName": "Pi Sigma",
        "charterYear": "2009",
        "universityName": "Rutgers–Newark",
        "city": "Newark, New Jersey",
        "province": "Northeastern Province"
    },
    {
        "id": 398,
        "chapterName": "Pi Tau",
        "charterYear": "2009",
        "universityName": "Seton Hall",
        "city": "South Orange, New Jersey",
        "moreInfo": "Prime Time Chapter",
        "province": "Northeastern Province"
    },
    {
        "id": 399,
        "chapterName": "Pi Upsilon",
        "charterYear": "2010",
        "universityName": "Arkansas Tech University",
        "city": "Russellville, Arkansas",
        "province": "Southwestern Province"
    },
    {
        "id": 400,
        "chapterName": "Pi Phi",
        "charterYear": "2010",
        "universityName": "Nova Southeastern University",
        "city": "Fort Lauderdale, Florida",
        "province": "Southern Province"
    },
    {
        "id": 401,
        "chapterName": "Pi Chi",
        "charterYear": "2010",
        "universityName": "Huntingdon College",
        "city": "Montgomery, Alabama",
        "province": "Southern Province"
    },
    {
        "id": 402,
        "chapterName": "Pi Psi",
        "charterYear": "2010",
        "universityName": "Penn State Harrisburg",
        "city": "Harrisburg, Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 403,
        "chapterName": "Pi Omega",
        "charterYear": "2010",
        "universityName": "University of Wisconsin-Whitewater",
        "city": "Whitewater, Wisconsin",
        "province": "North Central Province"
    },
    {
        "id": 404,
        "chapterName": "Rho Alpha",
        "charterYear": "2011",
        "universityName": "New Jersey City University",
        "city": "Jersey City, New Jersey",
        "province": "Northeastern Province"
    },
    {
        "id": 405,
        "chapterName": "Rho Beta",
        "charterYear": "2011",
        "universityName": "California State University, Monterey Bay",
        "city": "Seaside, California",
        "province": "Western Province"
    },
    {
        "id": 406,
        "chapterName": "Rho Gamma",
        "charterYear": "2012",
        "universityName": "University of Bridgeport",
        "city": "Bridgeport, Connecticut",
        "moreInfo": "Metro chapter covering the following schools: University of Bridgeport (Primary location), University of New Haven, Southern Connecticut State University, Yale University and Quinnipiac University.",
        "province": "Northeastern Province"
    },
    {
        "id": 407,
        "chapterName": "Rho Delta",
        "charterYear": "2012",
        "universityName": "Chowan University",
        "city": "Murfreesboro, North Carolina",
        "province": "Middle Eastern Province"
    },
    {
        "id": 408,
        "chapterName": "Rho Epsilon",
        "charterYear": "2013",
        "universityName": "Kutztown University of Pennsylvania",
        "city": "Kutztown, Pennsylvania",
        "province": "Northeastern Province"
    },
    {
        "id": 409,
        "chapterName": "Rho Zeta",
        "charterYear": "2013",
        "universityName": "Methodist University",
        "city": "Fayetteville, North Carolina",
        "province": "Middle Eastern Province"
    }
]

}