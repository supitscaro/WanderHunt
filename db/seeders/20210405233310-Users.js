const {createUsers} = require('.../seeds.js');
const users = createUsers(20);
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
    {
      username: 'Luke Skywalker',
      hashedPassword: '$2a$10$jbVCQDF4L2KmiS6P84o4OOYIaieYU.LYkAN9c9najlt9deu6AhxKC',
      email: 'LukeSkywalker@email.com'
    },
    {
      username: 'C-3PO',
      hashedPassword: '$2a$10$0CtviMIlloTxUUA/LOlI2ulCfv/o64sv1yp9.ngSdssdvvv.fHJCK',
      email: 'C-3PO@email.com'
    },
    {
      username: 'R2-D2',
      hashedPassword: '$2a$10$hUIUD2om4i5Z4LK0uXX5bOeRvY2bZoa8JDgI8gSyJjisqsyO98mU6',
      email: 'R2-D2@email.com'
    },
    {
      username: 'Darth Vader',
      hashedPassword: '$2a$10$tZBrFVMqh1mOuxsz563rWecwZ6ecFoe.7QsHX8TBDssl64AHHFQTu',
      email: 'DarthVader@email.com'
    },
    {
      username: 'Leia Organa',
      hashedPassword: '$2a$10$DC5hDz72GJ4JSwiRe/U12u25cPVM7axc0TF1VUuXP3pLVNSblQAri',
      email: 'LeiaOrgana@email.com'
    },
    {
      username: 'Owen Lars',
      hashedPassword: '$2a$10$CeJ9wInbuxNGae5O7A2TwO/iRr/EajZ8ADTNomZo3.yxMB3WWkKJ.',
      email: 'OwenLars@email.com'
    },
    {
      username: 'Beru Whitesun lars',
      hashedPassword: '$2a$10$nXFrEhcvohDlR3GugVLTHeYc2prV3STRcu4oSDSCGoTdqWkKLs8Wa',
      email: 'BeruWhitesunlars@email.com'
    },
    {
      username: 'R5-D4',
      hashedPassword: '$2a$10$DJDcV1YD3ZJczOuFMiGpAuhX93RaAax3w37o2tTy/xNaZwXZOQ1pG',
      email: 'R5-D4@email.com'
    },
    {
      username: 'Biggs Darklighter',
      hashedPassword: '$2a$10$0YfMlFcQ7rSvMJh.LTz9zOJ9JegxFuN7hvQUjhhUFZ4VNUXvOhX.C',
      email: 'BiggsDarklighter@email.com'
    },
    {
      username: 'Obi-Wan Kenobi',
      hashedPassword: '$2a$10$ce0.M7ZpkojH2bQOgoi1J.Wb9SuRAlS3SPYIwgXMrTEY9nRit30Gu',
      email: 'Obi-WanKenobi@email.com'
    },
    {
      username: 'Anakin Skywalker',
      hashedPassword: '$2a$10$wXjHLWbCrQQvTkTDEzMZLuRhxd4ayjxUPWONaV3gzXvenFvR1y/rm',
      email: 'AnakinSkywalker@email.com'
    },
    {
      username: 'Wilhuff Tarkin',
      hashedPassword: '$2a$10$97FX98hXFTqL8DwvL5jxYutR8VaygHvNEtLPEEfx0laeuIoTArBTe',
      email: 'WilhuffTarkin@email.com'
    },
    {
      username: 'Chewbacca',
      hashedPassword: '$2a$10$M5FHo5IrqdsQ.oej6jKNJuLCTUu4lKJR3agGp3uCAS7RxRpJFWZnO',
      email: 'Chewbacca@email.com'
    },
    {
      username: 'Han Solo',
      hashedPassword: '$2a$10$511PcxQIAerKxC6gmUPHZumqOOET7qrS5pq2Jy28JP/PIY70GhKFa',
      email: 'HanSolo@email.com'
    },
    {
      username: 'Greedo',
      hashedPassword: '$2a$10$WVjcTdLWkUOwjfDR7Bkk4ePg3zEFY2AfDJ2nhBQUDQsNfdZvLcYWq',
      email: 'Greedo@email.com'
    },{
      username: 'Yoda',
      hashedPassword: '$2a$10$wwUOrNZbmknx7FEmsWOglOFmiUEv.mEHhAPUS.18NapYF8viGqNEK',
      email: 'Yoda@email.com'
    },
    {
      username: 'Palpatine',
      hashedPassword: '$2a$10$AYhQHGKHh.mNd781slYvfuWQkNUs3HXKYTcQaQFo5/2zDWMVhfY7S',
      email: 'Palpatine@email.com'
    },
    {
      username: 'Boba Fett',
      hashedPassword: '$2a$10$KzQJd/kmLvgC4FhXy1nPSuETmWSl6FQBmCge0iqiqOlfGxTjIAVvS',
      email: 'BobaFett@email.com'
    },
    {
      username: 'IG-88',
      hashedPassword: '$2a$10$4cBILcfXiWcxCZn7pYS.VOq4gInaE7Nxm3hluXDdOVvpycRVWYGw6',
      email: 'IG-88@email.com'
    },
    {
      username: 'Bossk',
      hashedPassword: '$2a$10$P3KfuRhLXfdbneqLfzkj1OiEJWY0PyCamy8BI97JYCmd2uUcHQA.S',
      email: 'Bossk@email.com'
    },
    {
      username: 'Lando Calrissian',
      hashedPassword: '$2a$10$MsJRqxNe9Yufs2xq9xfhYevUhpdwQdhOlAGNlRpmrfudLgUNM32sW',
      email: 'LandoCalrissian@email.com'
    },
    {
      username: 'Lobot',
      hashedPassword: '$2a$10$wOl8jVwixcsFKy4VHc9u8uSUUDKs2Rx0Y07gP8BqvXlDdlME2KwKS',
      email: 'Lobot@email.com'
    },
    {
      username: 'Ackbar',
      hashedPassword: '$2a$10$rWBW.p0XpunvdMNc6ZJ6Se0DoSbScsFKO.oF81GbNo5M/iBUosjTS',
      email: 'Ackbar@email.com'
    },
    {
      username: 'Mon Mothma',
      hashedPassword: '$2a$10$nNmkjW00Vj7h/qcizP.pNe7rwj.cKVb6pTjryeKN2i2nyvocrcQKK',
      email: 'MonMothma@email.com'
    },
    {
      username: 'Arvel Crynyd',
      hashedPassword: '$2a$10$Bp9Lw5cSWNeYwyfDSF2MUOchK6WMnj9rNUr2kKXR5pzYqTcRrGC2y',
      email: 'ArvelCrynyd@email.com'
    },
    {
      username: 'Wicket Systri Warrick',
      hashedPassword: '$2a$10$zSgxvQX3eHwkorUo010ckOUVbLh4kPTGJwFpOON8t6RgAZf.M2FKy',
      email: 'WicketSystriWarrick@email.com'
    },{
      username: 'Nien Nunb',
      hashedPassword: '$2a$10$MHoA8m2q/87kDaHVDAePkOP5Dx8XmpuLjxELRGPsKQO32y0r0Uor2',
      email: 'NienNunb@email.com'
    },
    {
      username: 'Qui-Gon Jinn',
      hashedPassword: '$2a$10$/NkYn3o8ZPP0C8wv9GdmEedIQqtagsiK3tkKuVLidIV3OvXnzyrZy',
      email: 'Qui-GonJinn@email.com'
    },
    {
      username: 'Nute Gunray',
      hashedPassword: '$2a$10$XPaQu.f86.y5lkDJp2FAbu3LNwVL6dkaAnbY9q1u5XIJLWM1.rK5C',
      email: 'NuteGunray@email.com'
    },
    {
      username: 'Finis Valorum',
      hashedPassword: '$2a$10$l54Y1ce0M6nnMCaL3pRhqOyq7EVENN/IMJ9qCF4HfpDnCZIkcapv2',
      email: 'FinisValorum@email.com'
    },
    {
      username: 'Padmé Amidala',
      hashedPassword: '$2a$10$j60O4BBVaWeBEHx98cuDQuMv6ifA2zvPCUPHHMdqd1V/Y7oGonK.e',
      email: 'PadméAmidala@email.com'
    },
    {
      username: 'Jar Jar Binks',
      hashedPassword: '$2a$10$fEnmX2PjoA/MIv2SfDnzde8m/6xdvBTGukJYroRzm7HWF9p1a6GNC',
      email: 'JarJarBinks@email.com'
    },
    {
      username: 'Roos Tarpals',
      hashedPassword: '$2a$10$2ih42tsH4Ku08vLhbqHMEOpPJusa.MxdR/viwTXUIRMQmm7J6JcAG',
      email: 'RoosTarpals@email.com'
    },
    {
      username: 'Rugor Nass',
      hashedPassword: '$2a$10$XA5uGsENd.zPIIIOikcKZ.XveQFXCgaob.33ne9AaAo4gyXO8KVkS',
      email: 'RugorNass@email.com'
    },
    {
      username: 'Ric Olié',
      hashedPassword: '$2a$10$N4X947tGRMu8/AojPPfZWOedN.scDuGsxHec5VdOswB9ebEm2pMNG',
      email: 'RicOlié@email.com'
    },
    {
      username: 'Watto',
      hashedPassword: '$2a$10$FlWW9D014YKsGpe0pGjoPeVc4pbEq7iMAEOBcCQVAZuSBSyPKNjLK',
      email: 'Watto@email.com'
    },
    {
      username: 'Sebulba',
      hashedPassword: '$2a$10$yUbF94fg01QVh8wAzXRi0egd0RY3Av4nkMqd70qdcAXRE2Faja8eC',
      email: 'Sebulba@email.com'
    },
    {
      username: 'Quarsh Panaka',
      hashedPassword: '$2a$10$gwoMDUecr8yrXc3H2avuhOZ8l4Tc1R0BoqFyLd3phi51BXSzYqVJ6',
      email: 'QuarshPanaka@email.com'
    },
    {
      username: 'Shmi Skywalker',
      hashedPassword: '$2a$10$zi1yXTJ7dKNKNt3mXZC0Wu8Aky9okIDZF53z71Hi65N4/zEt/j4sW',
      email: 'ShmiSkywalker@email.com'
    },
    {
      username: 'Darth Maul',
      hashedPassword: '$2a$10$ifTEGqJjnUHZHrG7UjslLuvNol0zeQpwjpZJvklAtSWiNu6HXBkAW',
      email: 'DarthMaul@email.com'
    },
    {
      username: 'Bib Fortuna',
      hashedPassword: '$2a$10$9K.psqDGavWnW/3WKItN2Otm58kDUA7kt8AbfGLbGkWa2VTt1XyYK',
      email: 'BibFortuna@email.com'
    },
    {
      username: 'Ayla Secura',
      hashedPassword: '$2a$10$pNLvzjiC0NKFWDwAxKLXS.YLoC2i2s2437/qsj/tonRWiyXNr9N1K',
      email: 'AylaSecura@email.com'
    },
    {
      username: 'Ratts Tyerel',
      hashedPassword: '$2a$10$lVRCZXdqL5LL1aVkbRXWfOcrzvQn5A0OGZoI8JC.h3/1rVBCXaXTe',
      email: 'RattsTyerel@email.com'
    },
    {
      username: 'Dud Bolt',
      hashedPassword: '$2a$10$LChNrwHF.fcZJan4cq.OUOy21Sf0BPfQmnbvOp.3uI.cS.eZ6Gp3S',
      email: 'DudBolt@email.com'
    },
    {
      username: 'Gasgano',
      hashedPassword: '$2a$10$spsxFlSw5bRJs1ilRwNXTOkVhEwMmlDnZq9ONKk3t.2r4xsx3E8sK',
      email: 'Gasgano@email.com'
    },
    {
      username: 'Ben Quadinaros',
      hashedPassword: '$2a$10$AiTqKohkuIRfN/ar7/SdquRwxStMq/PZUk2hRWpSZ4M9CtiW790Pa',
      email: 'BenQuadinaros@email.com'
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
