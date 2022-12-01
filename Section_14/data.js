data = {
  2022: "R4",
  2021: "R3",
  2020: "R2",
  2019: "R1",
  2018: "H30",
  2017: "H29",
  2016: "H28",
  2015: "H27",
  2014: "H26",
  2013: "H25",
  2012: "H24",
  2011: "H23",
  2010: "H22",
  2009: "H21",
  2008: "H20",
  2007: "H19",
  2006: "H18",
  2005: "H17",
  2004: "H16",
  2003: "H15",
  2002: "H14",
  2001: "H13",
  2000: "H12",
  1999: "H11",
  1998: "H10",
  1997: "H9",
  1996: "H8",
  1995: "H7",
  1994: "H6",
  1993: "H5",
  1992: "H4",
  1991: "H3",
  1990: "H2",
  1989: "H1",
  1988: "S63",
  1987: "S62",
  1986: "S61",
  1985: "S60",
  1984: "S59",
  1983: "S58",
  1982: "S57",
  1981: "S56",
  1980: "S55",
  1979: "S54",
  1978: "S53",
  1977: "S52",
  1976: "S51",
  1975: "S50",
  1974: "S49",
  1973: "S48",
  1972: "S47",
  1971: "S46",
  1970: "S45",
  1969: "S44",
  1968: "S43",
  1967: "S42",
  1966: "S41",
  1965: "S40",
  1964: "S39",
  1963: "S38",
  1962: "S37",
  1961: "S36",
  1960: "S35",
  1959: "S34",
  1958: "S33",
  1957: "S32",
  1956: "S31",
  1955: "S30",
  1954: "S29",
  1953: "S28",
  1952: "S27",
  1951: "S26",
  1950: "S25",
  1949: "S24",
  1948: "S23",
  1947: "S22",
  1946: "S21",
  1945: "S20",
  1944: "S19",
  1943: "S18",
  1942: "S17",
  1941: "S16",
  1940: "S15",
  1939: "S14",
  1938: "S13",
  1937: "S12",
  1936: "S11",
  1935: "S10",
  1934: "S9",
  1933: "S8",
  1932: "S7",
  1931: "S6",
  1930: "S5",
  1929: "S4",
  1928: "S3",
  1927: "S2",
  1926: "S1",
  1925: "T14",
  1924: "T13",
  1923: "T12",
  1922: "T11",
  1921: "T10",
  1920: "T9",
  1919: "T8",
  1918: "T7",
  1917: "T6",
  1916: "T5",
  1915: "T4",
  1914: "T3",
  1913: "T2",
  1912: "T1",
};

const calculateAge = () => {
  const today = new Date("2022-05-11");
  const dayToday = today.getDate();
  const monthToday = today.getMonth();
  const yearToday = today.getFullYear();

  const birthDay = new Date("2000-05-10");
  const day = birthDay.getDate();
  const month = birthDay.getMonth();
  const year = birthDay.getFullYear();

  if (yearToday === year) {
    if (monthToday === month) {
      return 0;
    } else {
      if (dayToday >= day) {
        return monthToday - month;
      } else {
        return monthToday - month - 1;
      }
    }
  } else if (yearToday > year) {
    if (monthToday > month) {
      if (dayToday >= day) {
        return monthToday - month;
      } else {
        return monthToday - month - 1;
      }
    } else if (monthToday < month) {
      if (dayToday >= day) {
        return 12 + monthToday - month;
      } else {
        return 12 + monthToday - month - 1;
      }
    } else {
      if (dayToday >= day) {
        return 0;
      } else {
        return 11;
      }
    }
  }
  return 0;
};

console.log(calculateAge());
