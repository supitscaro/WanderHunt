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
      hashedPassword: '$2a$10$ZbvwtzpMb.b0Yiqq3yPOs.Gia8LGj9gO/4c2a8Hgnw/9yYGc0Mzua',
      email: 'LukeSkywalker@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'C-3PO',
      hashedPassword: '$2a$10$.EJ7GBfbO.EpRyVWCYJeX.7x3Lq2bS3Mw49HWyRI06olYiwsDE5M2',
      email: 'C-3PO@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'R2-D2',
      hashedPassword: '$2a$10$Y62NTJIz7sjLJ0KfQdP03upF.OsD/XEQYxmSZ2SytWkaZTkfQvCDW',
      email: 'R2-D2@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Darth Vader',
      hashedPassword: '$2a$10$6ceIbr9FahZfxSDCLgJoiu/.y3dXKuvx2AkzWOXpAgcnVrVZ9sKWm',
      email: 'DarthVader@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Leia Organa',
      hashedPassword: '$2a$10$f7gjKavTstC3ts5nJrw6ZOV14VWqsHya5BiYp5hMw.CRTzmqRVTLm',
      email: 'LeiaOrgana@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Owen Lars',
      hashedPassword: '$2a$10$LGsuxdBVsWWZLP24oMQ7R.AmUW/sPFrFb3Y7aSUnQmaSUBJU2gdyW',
      email: 'OwenLars@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Beru Whitesun lars',
      hashedPassword: '$2a$10$GpVWbuRTELv/7gQ857xKzuT/0rbvyp.n8lN74UMmTUZNyGM06b.V6',
      email: 'BeruWhitesunlars@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'R5-D4',
      hashedPassword: '$2a$10$2s/lA4p6l4O8Pd3ywB0Dpep.dcLecN7LtV3/VXAc/gN.5lpQDqr7i',
      email: 'R5-D4@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Biggs Darklighter',
      hashedPassword: '$2a$10$HJuSTI3zsbeDwunBAhfy4OqfjVnZ9vy5clasvLIr79hFiP5Mi6F.S',
      email: 'BiggsDarklighter@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Obi-Wan Kenobi',
      hashedPassword: '$2a$10$CmHM8CKjLUxTw/FNeouq8ee8N.FwaX/beVu0CN8amOKQrT/XPI8u.',
      email: 'Obi-WanKenobi@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Anakin Skywalker',
      hashedPassword: '$2a$10$ahbEB6GsvcSTWkTCCPUKeedkLn5mamtlWbgrle1WFBZBPktad85J6',
      email: 'AnakinSkywalker@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Wilhuff Tarkin',
      hashedPassword: '$2a$10$3cQ.mfIBvU1P1/XS7xAOxOqMM1oRxjRBv85/9cbFmiYKSMnVYShz2',
      email: 'WilhuffTarkin@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Chewbacca',
      hashedPassword: '$2a$10$H3x.0HiQD6vCCP4HLHHvluOEJJFsPqJklQ5YyiBOEyJ.oIuKWFzg2',
      email: 'Chewbacca@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Han Solo',
      hashedPassword: '$2a$10$5x/mJ.OuWA9pWlpy5MnNL.c3AsYej13o.UmfADE9FPRqxiPIsjDfy',
      email: 'HanSolo@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Greedo',
      hashedPassword: '$2a$10$xoNSxEegU21RO12UW92uzOynKd6gBOvFiZ6QJSsk34kib.F2BFWpu',
      email: 'Greedo@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Jabba Desilijic Tiure',
      hashedPassword: '$2a$10$3LXTJf7anRvGuUr236XZ6uv911z6i.2GEbkgNs/vGYO6f/5SlhcpK',
      email: 'JabbaDesilijicTiure@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Wedge Antilles',
      hashedPassword: '$2a$10$LWrj8jgoFuVk6/DLGMltm.gSGZ72OyVnbi465OGxoIU5NgNMdmLAy',
      email: 'WedgeAntilles@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Jek Tono Porkins',
      hashedPassword: '$2a$10$doy/ePpTlmKsBxxytPFJIec6HPMT6jW5TJAIsDcdgX4X/viw8GmpG',
      email: 'JekTonoPorkins@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Yoda',
      hashedPassword: '$2a$10$XmTjYNaGvubHrt0B2vtQ4.sBAX9RI1L/oYLf1drgycq6kMyNoblYO',
      email: 'Yoda@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Palpatine',
      hashedPassword: '$2a$10$U.QW7gPTonlizc45el.o5uxgrdsSzXyFxJesm/K4UoYtv4Hdij.Oq',
      email: 'Palpatine@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Boba Fett',
      hashedPassword: '$2a$10$B761QiSd8C7ZmSl3MAGsoukZ9VTCimpl62Lgbn8Vo4z5m/TWJf1iy',
      email: 'BobaFett@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'IG-88',
      hashedPassword: '$2a$10$vF.aP/xqO/mRy5zbwB.zve5IKj29L3xmbxXIVGrli70esp2Dezq4C',
      email: 'IG-88@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Bossk',
      hashedPassword: '$2a$10$d2N.oiV3jZxkdsPaEIZqauz7bwTUqwoMsnexmmio2ENeK/CxN6e7W',
      email: 'Bossk@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Lando Calrissian',
      hashedPassword: '$2a$10$KHlD/L0flKm/x1YgORNi3OLU/Hpl8ShbECYlomzhXDz2xjxdJ3p96',
      email: 'LandoCalrissian@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Lobot',
      hashedPassword: '$2a$10$WkbCJJyeHioztcU30AmFueml/hh6M2lHuOll1dyFbcPr4cfx6UTim',
      email: 'Lobot@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ackbar',
      hashedPassword: '$2a$10$FVjXKepY/uz1rI9HyVo/ROqnJY.Qu8FHyr8bLGHy1RXMt/mFy7JOm',
      email: 'Ackbar@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Mon Mothma',
      hashedPassword: '$2a$10$KpHbsuERZo2.TFCZpt7V1OHGh4AA7eFkmUqKlMw8vNGEUh9KZguqW',
      email: 'MonMothma@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Arvel Crynyd',
      hashedPassword: '$2a$10$HzwY6No1v3UecBzB8/TvueWiPUCvOHlUVxrJKzvZ11ptuTQoBxeq6',
      email: 'ArvelCrynyd@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Wicket Systri Warrick',
      hashedPassword: '$2a$10$eiqkMPAXPqkvwUxxoNHyfOdK6KPZ1PzPEE3y9r9DaR0k05bxGt6rO',
      email: 'WicketSystriWarrick@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Nien Nunb',
      hashedPassword: '$2a$10$hKB7VZs9fV1fOn5m.EIn6eN5IhESp6R71LQS6PSH89ehKfsptHXiO',
      email: 'NienNunb@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Qui-Gon Jinn',
      hashedPassword: '$2a$10$gMRswSUMP2YiT8xjw69T9ebPxKHLpDIsdbQNUhdabAxv237Hc9TxG',
      email: 'Qui-GonJinn@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Nute Gunray',
      hashedPassword: '$2a$10$uJb.Iu5/a10b70XmEUPo5e6tAwnuug7Y7ZfrlfHTa1ysiUPdgLLL.',
      email: 'NuteGunray@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Finis Valorum',
      hashedPassword: '$2a$10$fcMtAI3FOS8NFQsx6dHmn.yRrDGjXI57vs1IUXf5j09anwz7wmtUq',
      email: 'FinisValorum@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Padmé Amidala',
      hashedPassword: '$2a$10$O0yQFsIO51qhTpPrt5ZIjuojxRgjbTxZh/5dBMMsguhnXsSz54aUS',
      email: 'PadméAmidala@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Jar Jar Binks',
      hashedPassword: '$2a$10$zXaNuHz/Cqn0ZvqhjTrtcOHGK4mYwjI2/RcP4FGEKnbC9Fx0Z7eNW',
      email: 'JarJarBinks@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Roos Tarpals',
      hashedPassword: '$2a$10$ErFliFQWzena9hWSFXeHGOL.cTc0zgrKAt7eSkGUMkIaPhJjsgwdm',
      email: 'RoosTarpals@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Rugor Nass',
      hashedPassword: '$2a$10$3J3gIDNY9mZ4VGKKHwcb6eqbseY4I0PGmnjswNpq9cS7fULLbN/Ny',
      email: 'RugorNass@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ric Olié',
      hashedPassword: '$2a$10$76Vksc84Z7xv2GL4VL8vPuFCkrAx8yCIfQS4onZ70evhu6040usJu',
      email: 'RicOlié@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Watto',
      hashedPassword: '$2a$10$8a.ICkZwMhscOyzk0W78SOG9o54zkP2nPWBHdhVWsfMlNi1yZ/36O',
      email: 'Watto@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Sebulba',
      hashedPassword: '$2a$10$lD1im7mZIeaOGLendR5nHeELLpJ8rFVnr.vWWihVen61WkBb/sMwO',
      email: 'Sebulba@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Quarsh Panaka',
      hashedPassword: '$2a$10$BzeQz8wWoodDVd/kqeLx6OkmdU5uCPVyDIa4hpIR6RpyO17USVm/K',
      email: 'QuarshPanaka@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Shmi Skywalker',
      hashedPassword: '$2a$10$ScWLkVrpiZSHTYI0TDNz1OLjjycybzswzR2euFHT5b/uDhHDdeFPC',
      email: 'ShmiSkywalker@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Darth Maul',
      hashedPassword: '$2a$10$rh/shKtBS8Q6SN45sB/s/O7ufhbjvd34IJIcTplx0BUENxyu4n7yW',
      email: 'DarthMaul@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Bib Fortuna',
      hashedPassword: '$2a$10$cczvNZBN4RaTURX/ByZ8kOVKBv8nJbTHVEShlMOfY29BdY6VT6IjS',
      email: 'BibFortuna@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ayla Secura',
      hashedPassword: '$2a$10$TcqnkcUtne1bN.cM27up2OgYiWz6r/nlt6zuoQQ7tz6bd8UFEgpsW',
      email: 'AylaSecura@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ratts Tyerel',
      hashedPassword: '$2a$10$OfpZj.11uIzYYVHpaQbw0eMcP1jCbY3843hy/8zhXjPCbzQm0KdQS',
      email: 'RattsTyerel@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Dud Bolt',
      hashedPassword: '$2a$10$kiCj96uObjE0Fri2igFCY.wWF8nxJjrXZZMJcYXf3yt249LdxKgEK',
      email: 'DudBolt@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Gasgano',
      hashedPassword: '$2a$10$dWxzLchVEYQ7AHTGKRRHcu84l.LJt2HoJBxutjC/CxraK8GH9whRG',
      email: 'Gasgano@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'Ben Quadinaros',
      hashedPassword: '$2a$10$9g4kIqG/u5xLvDvHXuf00ul2qsm40qVWIHK9VK.br7qtOxCNSskXG',
      email: 'BenQuadinaros@email.com',
      createdAt: new Date(),
      updatedAt: new Date()
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
