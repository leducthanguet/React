// function getAge(dateString)
// {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var m = today.getMonth() - birthDate.getMonth();
//     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
//     {
//         age--;
//     }
//     return age;
// }

const data = {
  tasks: [
    {
      ServiceType: 9,
      EventStatusName: "b",
      CustomerCode: "d9cb631f-52c6-4756-bf58-9df88041e444",
      CustomerName: "いですか",
      Birthday: "1991-07-20",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: false,
      ContactTime: "2022-12-12 05:22:16",
    },
    {
      ServiceType: 0,
      EventStatusName: "a",
      CustomerCode: "015ef31f-e7da-4f9e-991f-2486143c3e0e",
      CustomerName: "いですか",
      Birthday: "1987-01-27",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2022-11-10 14:16:07",
    },
    {
      ServiceType: 8,
      EventStatusName: "a",
      CustomerCode: "16a8b630-cdec-402f-9e11-f9cd15385523",
      CustomerName: "さんでは",
      Birthday: "1977-10-21",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2021-11-15 17:36:36",
    },
    {
      ServiceType: 7,
      EventStatusName: "b",
      CustomerCode: "b455a2ec-f10d-40e8-a314-21444870b1f6",
      CustomerName: "さんでは",
      Birthday: "1950-12-15",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2021-12-07 08:15:15",
    },
    {
      ServiceType: 7,
      EventStatusName: "a",
      CustomerCode: "5b77f65a-4830-49e3-866a-071b94dcb3bb",
      CustomerName: "さんでは",
      Birthday: "1987-02-18",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2020-02-20 05:34:12",
    },
    {
      ServiceType: 8,
      EventStatusName: "b",
      CustomerCode: "1ee80d65-37f7-4a46-853d-d7e2a4abe442",
      CustomerName: "いですか",
      Birthday: "1984-04-24",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2020-03-24 24:45:24",
    },
    {
      ServiceType: 9,
      EventStatusName: "b",
      CustomerCode: "a243113e-4b80-424c-86d6-f2494ead7c0b",
      CustomerName: "さんでは",
      Birthday: "1963-03-26",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2020-05-12 09:16:24",
    },
    {
      ServiceType: 8,
      EventStatusName: "c",
      CustomerCode: "d8329d95-7447-4bc2-82e7-c1a342f7edac",
      CustomerName: "さんでは",
      Birthday: "1955-08-20",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: false,
      ContactTime: "2021-05-04 04:20:05",
    },
    {
      ServiceType: 8,
      EventStatusName: "b",
      CustomerCode: "553c5322-d7da-4ddf-ad86-11ea37ecd03d",
      CustomerName: "いですか",
      Birthday: "2003-01-15",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: true,
      ContactTime: "2021-12-22 24:33:19",
    },
    {
      ServiceType: 0,
      EventStatusName: "b",
      CustomerCode: "5122b5da-3ab6-4373-aba4-4d5f1804ae11",
      CustomerName: "いですか",
      Birthday: "1970-11-17",
      HokenSyubetu: "さんではないですか",
      OwUserName: "さんでは",
      ExistMessage: false,
      ContactTime: "2020-06-24 19:14:59",
    },
  ],
};

const serviceTypeFirst = data.tasks.filter((item) => {
  return item.ServiceType === 0;
});

console.log(serviceTypeFirst);
console.log(6);
