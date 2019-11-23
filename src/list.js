const senateList = [
  {
    state: "ABIA",
    name: "Sen. E. Abaribe",
    phoneNo: "08033129452",
    email: "enyiabaribe@yahoo.com"
  },
  {
    state: "ABIA",
    name: "Sen. T. Orji",
    phoneNo: "07082800000",
    email: "senatortaorji@gmail.com"
  },
  {
    state: "ABIA",
    name: "Sen. O. Kalu",
    phoneNo: "08034000001",
    email: "okalu@orjikalu.com"
  },
  {
    state: "ADAMAWA",
    name: "Sen. B. Yaroe",
    phoneNo: "08034050460",
    email: "bdyaroe@gmail.com"
  },
  {
    state: "ADAMAWA",
    name: "Sen. I. Abbo",
    phoneNo: "08066285112",
    email: "faradugun@gmail.com"
  },
  {
    state: "ADAMAWA",
    name: "Sen. A. Ahmed",
    phoneNo: "",
    email: "aishatu.ahmed@nass.gov.ng"
  },
  {
    state: "AKWA IBOM",
    name: "Sen. B. Akpan",
    phoneNo: "08055555188",
    email: "akpanalbert@hotmail.com"
  },
  {
    state: "AKWA IBOM",
    name: "Sen. A. Eyakenyi",
    phoneNo: "08035054282",
    email: "konssie@yahoo.com"
  },
  {
    state: "AKWA IBOM",
    name: "Sen. C. Ekpeyong",
    phoneNo: "08027785234",
    email: "chrisekpesg@yahoo.com"
  },
  {
    state: "ANAMBRA",
    name: "Sen. I. Ubah",
    phoneNo: "09096655596",
    email: "senatorifeanyiubah@gmail.com"
  },
  {
    state: "ANAMBRA",
    name: "Sen. E. Uche",
    phoneNo: "08037620002",
    email: "u.ekwunife@yahoo.com"
  },
  {
    state: "ANAMBRA",
    name: "Sen. A. Oduah",
    phoneNo: "08055084340",
    email: "senatorstella@gmail.com"
  },
  {
    state: "Bauchi",
    name: "Sen. H. Jika",
    phoneNo: "08038666690",
    email: "jikahalliru@gmail.com"
  },
  {
    state: "Bauchi",
    name: "Sen. A. Bulkachuwa",
    phoneNo: "",
    email: "adamu.bulkachuwa@nass.gov.ng"
  },
  {
    state: "Bauchi",
    name: "Sen. L. Gamau",
    phoneNo: "",
    email: "lawal.gumau@nass.gov.ng"
  },
  {
    state: "BAYELSA",
    name: "Sen. O. EWHRUDJAKPO",
    phoneNo: "09031352791",
    email: "ogagadick@gmail.com"
  },
  {
    state: "BAYELSA",
    name: "Sen. D. Diri",
    phoneNo: "08036668698",
    email: "douyediri@gmail.com"
  },
  {
    state: "BAYELSA",
    name: "Sen. D. Wangagra",
    phoneNo: "",
    email: "degi.wangagha@nass.gov.ng"
  },
  {
    state: "BENUE",
    name: "Sen. E. Orker-Jev",
    phoneNo: "",
    email: "emmanuel.orkerjev@nass.gov.ng"
  },
  {
    state: "BENUE",
    name: "Sen A. Morro",
    phoneNo: "",
    email: "abahmoro@yahoo.com"
  },
  {
    state: "BORNO",
    name: "Sen. A. Kyari",
    phoneNo: "",
    email: "abubakar.kyari@nass.gov.ng"
  },
  {
    state: "BORNO",
    name: "Sen. K. Shettima",
    phoneNo: "08034459047",
    email: "kashimshettima@gmail.com"
  },
  {
    state: "BORNO",
    name: "Sen. M. Ndume",
    phoneNo: "08109480004",
    email: "mohammed.ndume@nass.gov.ng"
  },
  {
    state: "CROSS RIVER",
    name: "Sen. R. Oko",
    phoneNo: "",
    email: "rose.oko@nass.gov.ng"
  },
  {
    state: "CROSS RIVER",
    name: "Sen. G. Bassey",
    phoneNo: "08034444555",
    email: "gershombassey@gmail.com"
  },
  {
    state: "CROSS RIVER",
    name: "Sen. S. Onor",
    phoneNo: "08030998460",
    email: "irunandu@yahoo.com"
  },
  {
    state: "DELTA",
    name: "Sen. O. Omo-Agege",
    phoneNo: "07033399937",
    email: "senator.ovieomoagege@gmail.com"
  },
  {
    state: "DELTA",
    name: "Sen. J. Manager",
    phoneNo: "08143103829",
    email: "jamesmanager2013@gmail.com"
  },
  {
    state: "DELTA",
    name: "Sen. P. Nwaoboshi",
    phoneNo: "08037200999",
    email: "pnwaoboshi@yahoo.com"
  },
  {
    state: "EDO",
    name: "Sen. C. Ordia",
    phoneNo: "08038403877",
    email: "engineercliffordordia@gmail.com"
  },
  {
    state: "EDO",
    name: "Sen. F. Alimikhena",
    phoneNo: "08155555884",
    email: "falimikhena@yahoo.com"
  },
  {
    state: "EDO",
    name: "Sen. M. Urhoghide",
    phoneNo: "08033855557",
    email: "matthewurhoghide@yahoo.com"
  },
  {
    state: "EKITI",
    name: "Sen. A. Adeyeye",
    phoneNo: "08023051100",
    email: "dadeyeye34@gmail.com"
  },
  {
    state: "EKITI",
    name: "Sen. O. Adetumbi",
    phoneNo: "08064487689",
    email: "senator.adetunmbi@gmail.com"
  },
  {
    state: "EKITI",
    name: "Sen. M. Bamidele",
    phoneNo: "080911112",
    email: "amicusng@gmail.com"
  },
  {
    state: "ENUGU",
    name: "Sen. C. Nnamani",
    phoneNo: "08022255522",
    email: "ebeanoglobal875@gmail.com"
  },
  {
    state: "ENUGU",
    name: "Sen. Ikweremadu",
    phoneNo: "08075757000",
    email: "ikeekweremadu@yahoo.com"
  },
  {
    state: "ENUGU",
    name: "Sen. C. Utazi",
    phoneNo: "",
    email: "chukwuka.utazi@nass.gov.ng"
  },
  {
    state: "GOMBE",
    name: "Sen. A. Kilawangs",
    phoneNo: "",
    email: "amos.kilawangs@nass.gov.ng"
  },
  {
    state: "GOMBE",
    name: "Sen. D. Mohammed",
    phoneNo: "07068686699",
    email: "mdgoje1@gmail.com"
  },
  {
    state: "GOMBE",
    name: "Sen. S. Alkali",
    phoneNo: "08026032222",
    email: "saidualkali905@gmail.com"
  }
];

export default senateList;
