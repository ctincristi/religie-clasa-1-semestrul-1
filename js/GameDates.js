function GameDates() {
	this.dates = [];
	this.main = [];
	this.sounds = [];
	this.images = [];
	this.setDates();
	this.keys = {gameKey:"1ManualReli144", result:"Evaluation1ManualReli17Temp44",
			resultTemp:"Eval1ManualReli17Temp", userSession:"manualReli1UserLogin144",
			allUsers:"manualReli1AllUsers144"};
	this.setDates();
	this.isIe = ((window.ActiveXObject !== undefined) || ((navigator.platform.indexOf("iPhone") != -1)
			|| (navigator.platform.indexOf("iPad") != -1)));
}

GameDates.prototype.setDates = function() {
	this.main = {
		mainPages : [ {
			page : "cuprins"
		}, {
			page : "rezulate",
			pageImage : "images/pagina/pg_alba.jpg"
		}, {
			page : "ajutor",
			pageImage : "images/pagina/pg_alba.jpg"

		} ],
		coperta:"images/pagina/coperta.jpg",
		coperta1:"images/pagina/coperta4.jpg",
		maxPage : 64,
		pages : [{

					page : 0,
					pageImage : "images/pagina/coperta2.jpg",
					pageImage2 : "images/pagina/pg01.jpg",
					corner : true,
					
				},{
					page : 0,
					pageImage : "images/pagina/pg02.jpg",
					pageImage2 : "images/pagina/pg03.jpg",
					corner : true,
					cuprins : [ { x:1700, y:1205, width:1160, height:50, pageNumber : 3},//Cuvant-inainte
					            { x:1700, y:1272, width:1160, height:50, pageNumber : 4},//Ne aminitim din clasa pregatitoare
					            { x:1700, y:1405, width:1160, height:50, pageNumber : 5},//Omul isi arat iubirea fata de D-zeu in biserica
					            { x:1700, y:1475, width:1160, height:50, pageNumber : 6},//Biserica este casa lui Dumnezeu
					            { x:1700, y:1543, width:1160, height:50, pageNumber : 8},//Cum arata o biserica
					            { x:1700, y:1608, width:1160, height:50, pageNumber : 10},//Cum il primesc pe D-zeu in biserica
					            { x:1700, y:1672, width:1160, height:50, pageNumber : 12},//Cu cine ma rog in biserica
					          ],
					
				},{
					page : 1,
					pageImage : "images/pagina/pg04.jpg",
					pageImage2 : "images/pagina/pg05.jpg",
					corner : true,
					btnImages: [{x : 1875,y : 435, width : 110,height : 69,classCss:"btn_observa"}],
					cuprins : [ { x:205, y:148, width:1160, height:50, pageNumber : 14},//Cum ma comport in biserica
					            { x:205, y:215, width:1160, height:50, pageNumber : 16},//Ce fac eu pentru biserica mea
					            { x:205, y:282, width:1160, height:50, pageNumber : 18},//Ce fac eu pentru biserica mea
					            { x:205, y:282, width:1160, height:50, pageNumber : 18},//Recapitulare.Evaluare
					            { x:205, y:349, width:1160, height:50, pageNumber : 20},//Cap.II-Omul este fiinta care crede in D-zeu
					            { x:205, y:416, width:1160, height:50, pageNumber : 21},//Omul asculta cuvantul lui D-zeu
					            { x:205, y:483, width:1160, height:50, pageNumber : 23},//Omul se bucura de creatia lui D-zeu
					            { x:205, y:550, width:1160, height:50, pageNumber : 25},//Biblia ne vorbeste despre omanii credinciosi
					            { x:205, y:617, width:1160, height:50, pageNumber : 27},//Sfintii apostoli sunt modele de credinta
					            { x:205, y:684, width:1160, height:50, pageNumber : 29},//Ce inseamna sa fii un om credincios
					            { x:205, y:751, width:1160, height:50, pageNumber : 31},//Recapitulare.Evaluare
					            ],
		            games:[{
							name : "GamesStatic",
							x:1875, y:435, width:830, height:620,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Mănăstirea Suceviţa",
									resize : 260,
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg05.jpg",width : 707,height : 530,top : -12,left : 0},
							},
								sarcina:"",
							}
				         }]            
					
				},{
					page : 2,
					pageImage : "images/pagina/pg06.jpg",
					pageImage2 : "images/pagina/pg07.jpg",
					corner : true,
					btnImages: [{x : 842,y : 342,width : 110,height : 69,classCss:"btn_observa"},
					            {x : 2320,y : 747,width : 110,height : 69,classCss:"btn_observa"},
					            {x : 2090,y : 1012,width : 110,height : 69,classCss:"btn_video"},
					            {x : 212,y : 717,width : 110,height : 69,classCss:"btn_interactiv"},
					           ],
					videos: [{
								name : "video",
								x:1700, y:1010, width:500, height:90,
								gameInstance : {
									title : {
										logo : "video",
										text : "Semnul Sfintei Cruci",
										position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									},
									src : "video/vol1_pg07_7M_cum_ne_inchinam.mp4",
									properties : {width:1066, height:600}
							 }
				           }],
		           games:[{
							name : "GamesStatic",
							x:840, y:340, width:510, height:795,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Domnul Iisus Hristos",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg06.jpg",width : 370,height : 530,top : -12,left : 0},
							}
						  }
		           		},{
							name : "GamesStatic",
							x:2318, y:745, width:560, height:750,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Maica Domnului",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg07.jpg",width : 392,height : 530,top : -12,left : 0},
							}
						  }
		           		},{
							name : "GamesComplex",
							x:210, y:715, width:580, height:790,
							gameInstance : {
								title : {
									logo : "interactiv",
									text : "Alege răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
										text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. Pentru a închide fereastra, apasă butonul   ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg06_ex1",
								sarcina:"sounds/sarcini/alegeRaspunsulCorect.mp3",
						   }
					  }]        
					
				},
				{
					page : 3,
					pageImage : "images/pagina/pg08.jpg",
					pageImage2 : "images/pagina/pg09.jpg",
					corner : true,
					btnImages : [{x : 1300,y : 1560,width : 110,height : 69,classCss:"btn_video"},
					             {x : 852,y : 147,width : 110,height : 69,classCss:"btn_interactiv"}
					             ],
					videos:[{
						name : "video",
						x:185, y:1560, width:1230, height:185,
						gameInstance : {
							title : {
								logo : "video",
								text : "Sfântul Botez",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg08_17M_filmulet_cu_fundal_muzical_de_la_botez.mp4",
							properties : {width:1066, height:600}
						}
				  }],
					games:[{
						name : "GamesComplex",
						x:850, y:145, width:530, height:780,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos." +
											" Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. Pentru a închide fereastra, apasă butonul   ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg08_ex2",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  }]
					

				},
				{
					page : 4,
					pageImage : "images/pagina/pg10.jpg",
					pageImage2 : "images/pagina/pg11.jpg",
					corner : true,
					btnImages : [{x : 350,y : 502,width : 110,height : 69,classCss:"btn_video"},
					             {x : 812,y : 872,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 202,y : 1317,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1707,y : 582,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 782,y : 1322,width : 110,height : 69,classCss:"btn_interactiv"},
					],
					videos:[{
						name : "video",
						x:395, y:500, width:1015, height:275,
						gameInstance : {
							title : {
								logo : "video",
								text : "Biserici",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg10_1.mp4",//cladiri si biserica 
							properties : {width:1066, height:600}
						}
				  }],
					games:[{
						name : "GamesStatic",
						x:810, y:870, width:565, height:400,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Ateneul Român",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg10_1.jpg",width : 707,height : 530,top : -12,left : 0},
							},
						}
					},{
						name : "GamesStatic",
						x:200, y:1315, width:575, height:385,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Biserica Mănăstirii Neamţ",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg10_2.jpg",width : 706,height : 530,top : -12,left : 0},
							}
						}
					},{
						name : "GamesStatic",
						x:1705, y:580, width:580, height:415,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Casă",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg11.jpg",width : 801,height : 530,top : -12,left : 0},
							}
						}
					},{
						name : "GamesComplex",
						x:780, y:1320, width:600, height:385,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
							},
							gameDates : "GamesInteractivPg10_ex3",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  }]
					
					
				},
				{
					page : 5,
					pageImage : "images/pagina/pg12.jpg",
					pageImage2 : "images/pagina/pg13.jpg",
					corner : true,
					btnImages : [{x : 317,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2217,y : 457,width : 110,height : 69,classCss:"btn_observa"},
					            //{x : 442,y : 1192,width : 110,height : 69,classCss:"btn_video"},
					             {x : 930,y : 1257,width : 110,height : 69,classCss:"btn_video"},
					            ],
		            videos:[
//		                    {
//						name : "video",
//						x:440, y:1190, width:440, height:265,
//						gameInstance : {
//							title : {
//								logo : "video",
//								text : "Biserici din Bucureşti",
//								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
//							},
//							src : "video/vol1_pg12_cladiri_si_biserica.mp4",
//							properties : {width:1066, height:600}
//						}
//				    },
				    {
						name : "video",
						x:928, y:1256, width:433, height:253,
						gameInstance : {
							title : {
								logo : "video",
								text : "Biserică: exterior şi interior",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg12_11_biserica_exterior_interior.mp4",
							properties : {width:1066, height:600}
						}
				    }],               
					games:[{
						name : "GamesStatic",
						x:315, y:150, width:960, height:655,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Biserică din Suceava",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg12.jpg",width : 780,height : 530,top : -12,left : 0},
							}
						}
					},{
						name : "GamesStatic",
						x:2215, y:455, width:620, height:1080,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Biserică din Maramureş",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg13.jpg",width :422,height : 530,top : -12,left : 0},
							}
						}
					}]
					
				},
				{
					page : 6,
					pageImage : "images/pagina/pg14.jpg",
					pageImage2 : "images/pagina/pg15.jpg",
					corner : true,
					btnImages : [{x : 466,y : 106,width : 110,height : 69,classCss:"btn_video"},
					             {x : 340,y : 472,width : 110,height : 69,classCss:"btn_video"},
					             {x : 257,y : 857,width : 110,height : 69,classCss:"btn_video"},
					             {x : 822,y : 857,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1670,y : 152,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1752,y : 382,width : 110,height : 69,classCss:"btn_video"},
					            ],
		            videos:[{
						name : "video",
						x:466, y:106, width:940, height:342,
						gameInstance : {
							title : {
								logo : "video",
								text : "Picturi în biserică",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg14_11_pictura_biserica.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:395, y:470, width:1015, height:295,
						gameInstance : {
							title : {
								logo : "video",
								text : "Biserici",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg14_3_detalii_biserici.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:255, y:855, width:545, height:645,
						gameInstance : {
							title : {
								logo : "video",
								text : "Biserică - vedere din exterior și din interior",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg14_2M_int_ext_biserica_3.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:820, y:855, width:550, height:885,
						gameInstance : {
							title : {
								logo : "video",
								text : "Interior biserică",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg14_2_interior_biserica.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:1670, y:152, width:1203, height:194,
						gameInstance : {
							title : {
								logo : "video",
								text : "Preoți în Sfântul Altar",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg15_20M_preoti_in_altar_la_epicleza_2.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:1750, y:380, width:1085, height:800,
						gameInstance : {
							title : {
								logo : "video",
								text : "Sfântul Altar interior",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg15_10_obiectele_de_pe_sfanta_masa.mp4",
							properties : {width:1066, height:600}
						}
				    }],           
					
					

				},
				{
					page : 7,
					pageImage : "images/pagina/pg16.jpg",
					pageImage2 : "images/pagina/pg17.jpg",
					corner : true,
					btnImages : [{x : 300,y : 1422,width : 110,height : 69,classCss:"btn_video"},
					             {x : 252,y : 142,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x : 2262,y : 987,width : 110,height : 69,classCss:"btn_observa"} 
					            ],
		            videos:[{
						name : "video",
						x:365, y:1420, width:440, height:255,
						gameInstance : {
							title : {
								logo : "video",
								text : "Biserica Patriarhiei",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg16_1M_exterior_biserica_ansamblu.mp4",
							properties : {width:1066, height:600}
						}
				    }],             
					games:[{
							name : "GamesStatic",
							x:2260, y:985, width:570, height:450,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Sfântul Altar",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg17.jpg",width :797,height : 530,top : -12,left : 0},
								}
							}
						},{
							name : "GamesComplex",
							x:250, y:140, width:1090, height:740,
							gameInstance : {
								title : {
									logo : "interactiv",
									text : "Alege răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
										text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL." +
													" Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg16_ex4",
								sarcina:"sounds/sarcini/alegeRaspunsulCorect.mp3",
						   }
					  }]
				},
							
				{
					page : 8,
					pageImage : "images/pagina/pg18.jpg",
					pageImage2 : "images/pagina/pg19.jpg",
					corner : true,
					btnImages : [{x : 340,y : 443,width : 110,height : 69,classCss:"btn_video"},
					             {x : 212,y : 942,width : 110,height : 69,classCss:"btn_video"},
					             {x : 812,y : 942,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1822,y : 392,width : 110,height : 69,classCss:"btn_observa"},
						         ],
			        videos:[{
						name : "video",
						x:395, y:445, width:975, height:335,
						gameInstance : {
							title : {
								logo : "video",
								text : "Sfânta Liturghie (fragment)",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg18_25_fragment_liturgie.mp4",
							properties : {width:1066, height:600}
						}
			        },{
							name : "video",
							x:210, y:940, width:550, height:795,
							gameInstance : {
								title : {
									logo : "video",
									text : "Sfântul Botez",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
								src : "video/vol1_pg18_2.mp4",//botez
								properties : {width:1066, height:600}
							}
					}],
					games:[{
						name : "GamesStatic",
						x:810, y:940, width:575, height:795,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Sfânta Evanghelie",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg18.jpg",width :415,height : 530,top : -12,left : 0},
							}
						}
					},{
						name : "GamesStatic",
						x:1820, y:390, width:905, height:765,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Moment din Sfânta Liturghie",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg19.jpg",width :797,height : 530,top : -12,left : 0},
							}
						}
					}]
					
				},
				{
					page : 9,
					pageImage : "images/pagina/pg20.jpg",
					pageImage2 : "images/pagina/pg21.jpg",
					corner : true,
					btnImages : [{x : 907,y : 607,width : 393,height : 69,classCss:"btn_video"},
					             {x : 232,y : 1027,width : 393,height : 69,classCss:"btn_observa"},
					             {x : 2562,y : 422,width : 393,height : 69,classCss:"btn_observa"}],
					videos:[{
						name : "video",
						x:905, y:605, width:465, height:290,
						gameInstance : {
							title : {
								logo : "video",
								text : "Împărtăşirea credincioşilor",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg20_4_copil_la_impartasit.mp4",
							properties : {width:1066, height:600}
						}
			        }],
					games:[{
						name : "GamesStatic",
						x:230, y:1025, width:1120, height:710,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Sfânta Împărtăşanie",
								resize : 260,
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg20.jpg",width :797,height : 530,top : -12,left : 0},
							}
						}
					},{
						name : "GamesStatic",
						x:2560, y:420, width:270, height:435,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Candelă",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg21.jpg",width :326,height : 530,top : -12,left : 0},
							}
						}
					}]
					

				},
				{
					page : 10,
					pageImage : "images/pagina/pg22.jpg",
					pageImage2 : "images/pagina/pg23.jpg",
					corner : true,
					btnImages : [{x : 202,y : 1167,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1662,y : 335,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2297,y : 1172,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1670,y : 1590,width : 110,height : 69,classCss:"btn_interactiv"}],
		            videos:[{
		        		name : "video",
		        		x:200, y:1165, width:1180, height:570,
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Copii care se roagă în biserică",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg22_3.mp4",//copii care se roagă în biserică
		        			properties : {width:1066, height:600}
		        		}
		        	}],           
					games:[{
						name : "GamesStatic",
						x:1660, y:335, width:1190, height:660,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Mă rog împreună cu întreaga biserică",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg23_1.jpg",width : 640,height : 480,top : -12,left : 0},
							}
					   }
					 },{
						name : "GamesStatic",
						x:2295, y:1170, width:540, height:550,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Maria alege.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg23_2.jpg",width : 704,height : 530,top : -12,left : 0},
							},
						}
					},{
						name : "GamesComplex",
						x:1700, y:1505, width:560, height:205,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										   "Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg23_ex5",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  }]
				
					
				},
				{
					page : 11,
					pageImage : "images/pagina/pg24.jpg",
					pageImage2 : "images/pagina/pg25.jpg",
					corner : true,
					btnImages : [{x : 627,y : 572,width : 110,height : 69,classCss:"btn_video"} ,
					             {x : 252,y : 877,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1992,y : 427,width : 110,height : 69,classCss:"btn_observa"},
					             
					             ],
		            videos:[{
						name : "video",
						x:625, y:570, width:460, height:255, 
						gameInstance : {
							title : {
								logo : "video",
								text : "Creştinii se roagă împreună cu </br>preotul la sfintele slujbe",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg24_5_slujba_cu_mai_multi_copii.mp4",
							properties : {width:1066, height:600}
						}
				    }],            
					games:[{
						name : "GamesStatic",
						 x:250, y:875, width:1125, height:850,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Creștinii formează biserica lui Hristos",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg24.jpg",width : 800,height : 530,top : -12,left : 0},
							},
						}
					},{
						name : "GamesStatic",
						x:1990, y:425, width:565, height:795,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Binecuvântare patriarhală",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg25.jpg",width : 355,height : 530,top : -12,left : 0},
							},
						}
					}]
				
				},
				{
					page : 12,
					pageImage : "images/pagina/pg26.jpg",
					pageImage2 : "images/pagina/pg27.jpg",
					corner : true,
					btnImages : [{x : 467,y : 102,width : 110,height : 69,classCss:"btn_video"},
					             {x : 345,y : 437,width : 110,height : 69,classCss:"btn_video"},
					             {x : 887,y : 722,width : 110,height : 69,classCss:"btn_video"},
					             {x : 207,y : 1052,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1822,y : 757,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 207,y : 1392,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x : 1720,y : 620,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x : 1740,y : 1480,width : 110,height : 69,classCss:"btn_interactiv"}
					             
					            ],
		            videos:[{
		        		name : "video",
		        		 x:465, y:100, width:900, height:320,
		        		gameInstance : {
		        			title : {
								logo : "video",
								text : "Cum mă comport în biserică ",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg26_6_comportament_adecvat_biserica.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
						name : "video",
						x:400, y:435, width:980, height:260, 
						gameInstance : {
							title : {
								logo : "video",
								text : "Cum mă comport în biserică",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg26_06_comportament_adecvat_copii.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:885, y:720, width:495, height:820, 
						gameInstance : {
							title : {
								logo : "video",
								text : "Când mergem la biserică ne îmbrăcăm cuviincios",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg26_7_copii_la_slujba.mp4",
							properties : {width:1066, height:600}
						}
				    }],            
					games:[{
						name : "GamesStatic",
						x:205, y:1050, width:660, height:340,
						gameInstance : {
							title : {
								logo : "observa",
								text : "În biserică și în curtea ei ne comportăm civilizat.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg26.jpg",width : 800,height : 530,top : -12,left : 0},
							}
					  }
					},{
						name : "GamesStatic",
						x:1820, y:755, width:940, height:635,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Nu aşa trebuie să mă comport în biserică.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg27.jpg",width : 800,height : 530,top : -12,left : 0},
							}
					  }
					},{
						name : "GamesComplex",
						x:205, y:1390, width:660, height:340,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Alege varianta corectă.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
									text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL." +
												" Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg26_ex6",
							sarcina:"sounds/sarcini/alegeVariantaCorecta.mp3",
					   }
				  },{
						name : "GamesComplex",
						x:1740, y:550, width:1090, height:185,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Bifează răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
									text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
											"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. Pentru a închide fereastra, apasă butonul   ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg27_ex7",
							sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
					   }
				  },{
						name : "GamesComplex",
						x:1740, y:1410, width:1090, height:335,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Colorează norişorii care arată cum trebuie să fie un copil în biserică.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpNorisori1.mp3",
									text : "Colorează cu albastru norișorii care arată cum trebuie sa fie un copil in biserică și cu roșu ceilalți norișori. Pentru a colora apasă pe culoare, apoi pe norișor. " +
											"Când consideri că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
								
							},
							gameDates : "GamesInteractivPg27_ex8",
							sarcina:"sounds/sarcini/coloreazaNorisorii1.mp3",
						}
					}]
					
				},
				{
					page : 13,
					pageImage : "images/pagina/pg28.jpg",
					pageImage2 : "images/pagina/pg29.jpg",
					corner : true,
					btnImages : [{x : 202,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					            ],
		          games:[{
						name : "GamesStatic",
						x:200, y:150, width:460, height:910,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Maica Domnului",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg28.jpg",width : 264,height : 530,top : -12,left : 0},
							}
					  }
					}]
					
					
				},
				{
					page : 14,
					pageImage : "images/pagina/pg30.jpg",
					pageImage2 : "images/pagina/pg31.jpg",
					corner : true,
					btnImages : [{x : 350,y : 452,width : 110,height : 69,classCss:"btn_video"},
					             {x : 207,y : 1262,width : 110,height : 69,classCss:"btn_video"},
					             {x : 662,y : 812,width : 110,height : 69,classCss:"btn_video"},
					             {x : 847,y : 1262,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1705,y : 700,width : 110,height : 69,classCss:"btn_observa"},
					             ],
					videos:[{
		        		name : "video",
		        		x:400, y:450, width:973, height:203,
		        		gameInstance : {
		        			title : {
								logo : "video",
								text : "Serbare de Crăciun",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
		        			},	
		        			src : "video/vol1_pg30_9M_copii_care_canta_in_spectacole_de_caritate.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
		        		name : "video",
		        		x:205, y:1260, width:615, height:480,
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Ajut copiii.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg30_8_copii_in_vizita_la_un_centru.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
						name : "video",
						x:660, y:810, width:725, height:430, 
						gameInstance : {
							title : {
								logo : "video",
								text : "Copiii participă la activităţile organizate de biserică.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg30_8M_copii_care_canta_in_corul_bisericii.mp4",
							properties : {width:1066, height:600}
						}
				    },{
						name : "video",
						x:845, y:1260, width:540, height:480,  
						gameInstance : {
							title : {
								logo : "video",
								text : "Îi ajut pe cei bătrâni și bolnavi.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
							src : "video/vol1_pg30_9_copii_in_vizita_la_bolnavi.mp4",
							properties : {width:1066, height:600}
						}
				    }], 
					games:[{
						name : "GamesStatic",
						x:1705, y:700, width:590, height:485,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Îi ajut pe bolnavi.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg31.jpg",width : 653,height : 530,top : -12,left : 0},
							}
					  }
					}]
					
				},
				{
					page : 15,
					pageImage : "images/pagina/pg32.jpg",
					pageImage2 : "images/pagina/pg33.jpg",
					corner : true,
					btnImages : [{x : 205,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					],
					games:[{
						name : "GamesStatic",
						x:205, y:150, width:630, height:835,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Sfânta Parascheva",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg32.jpg",width : 395,height : 530,top : -12,left :0},
							}
						}
					}]
					
				},
				{
					page : 16,
					pageImage : "images/pagina/pg34.jpg",
					pageImage2 : "images/pagina/pg35.jpg",
					corner : true,
					btnImages : [],
					videos:[],
					games : []
		        },
				{
					page : 17,
					pageImage : "images/pagina/pg36.jpg",
					pageImage2 : "images/pagina/pg37.jpg",
					corner : true,
					btnImages : [{x : 192,y : 1485,width : 110,height : 69,classCss:"btn_interactiv"}],
					games:[{
						name : "GamesComplex",
						x:190, y:1415, width:1190, height:325,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Numerotează cuvintele, pentru a obține enunțul potrivit.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpNumeroteazaCuvintele.mp3",
									text : "Citește cuvintele și ordonează-le astfel încât să  formeze propoziții corecte prin completarea numărului lor de ordine în spațiile indicate. " +
											"Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
								
							},
							gameDates : "GamesInteractivPg36_ex9",
							sarcina:"sounds/sarcini/numeroteazaCuvintele.mp3",
						}
					}]
					
					
				},
				{
					page : 18,
					pageImage : "images/pagina/pg38.jpg",
					pageImage2 : "images/pagina/pg39.jpg",
					corner : true,
					btnImages : [],
					videos:[],
					games:[]
					
					
				},
				{
					page : 19,
					pageImage : "images/pagina/pg40.jpg",
					pageImage2 : "images/pagina/pg41.jpg",
					corner : true,
					btnImages : [{x : 322,y : 917,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1707,y : 452,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2475,y : 452,width : 110,height : 69,classCss:"btn_observa"},
					             ],
					games:[{
						name : "GamesStatic",
						x:320, y:915, width:945, height:820,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Predica de pe Munte",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg40.jpg",width : 679,height : 530,top : -12,left :0},
							}
					   }
					},
					{
						name : "GamesStatic",
						x:1705, y:450, width:370, height:825,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Profetul Moise",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg41_1.jpg",width : 405,height : 530,top : -12,left :0},
							}
					   }
					},
					{
						name : "GamesStatic",
						x:2475, y:450, width:370, height:825,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Sfântul Ioan Botezătorul",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg41_2.jpg",width : 312,height : 530,top : -12,left :0},
							}
					   }
					}]
					
					
				},
				{
					page : 20,
					pageImage : "images/pagina/pg42.jpg",
					pageImage2 : "images/pagina/pg43.jpg",
					corner : true,
					btnImages : [{x : 402,y : 427,width : 110,height : 69,classCss:"btn_video"},
					             {x : 397,y : 1262,width : 110,height : 69,classCss:"btn_video"},
					             {x : 835,y : 1262,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1675,y : 750,width : 110,height : 69,classCss:"btn_interactiv"}
					
					],
					videos:[{
		        		name : "video",
		        		x:400, y:425, width:240, height:335, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "La ora de religie,</br>elevii învaţă despre Biblie.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg42_manual_bibliaB.mp4",//
		        			properties : {width:1066, height:600}
		        		}
		        	},
		        	{
		        		name : "video",
		        		x:395, y:1260, width:360, height:490, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Emisiune religioasă",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg42_5.mp4",//EMISIUNE RELIGIOASA 
		        			properties : {width:1066, height:600}
		        		}
		        	},
		        	{
		        		name : "video",
		        		x:835, y:1260, width:360, height:490, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Oră de religie",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg42_manual_ora_de_religie.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	}],
					games:[{
						name : "GamesComplex",
						x:1675, y:677, width:1210, height:870,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Colorează norișorii care conțin continuarea corectă a enunțului:</br><strong>Pentru a împlini cuvântul lui Dumnezeu un copil</strong>",//, copilul credincios
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpNorisori2.mp3",
									text : "Colorează cu albastru norișorii care conțin continuarea corectă a enunțului: <strong><i>" +
											"Pentru a împlini cuvăntul lui Dumnezeu, copilul credincios</strong></i> și cu roșu ceilalți norișori. Pentru a colora apasă pe culoare, apoi pe norișor. " +
											"Când consideri că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
							},
							gameDates : "GamesInteractivPg43_ex10",
							sarcina:"sounds/sarcini/coloreazaNorisorii2.mp3",
						}
					}]
					
					
				},
				{
					page : 21,
					pageImage : "images/pagina/pg44.jpg",
					pageImage2 : "images/pagina/pg45.jpg",
					corner : true,
					btnImages : [{x : 467,y : 127,width : 110,height : 69,classCss:"btn_video"},
					             {x : 350,y : 500,width : 110,height : 69,classCss:"btn_video"},
					             {x : 197,y : 1682,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1707,y : 577,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2092,y : 577,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2482,y : 577,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 197,y :842,width : 110,height : 69,classCss:"btn_puzzle"}
					],
					videos:[{
		        		name : "video",
		        		x:465, y:125, width:745, height:340, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Frumusețea naturii",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg44_7.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
		        		name : "video",
		        		x:395, y:500, width:995, height:255, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Varietatea animalelor, păsărilor și plantelor",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg44_8.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
		        		name : "video",
		        		x:195, y:1680, width:1180, height:70, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Biblia",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg44_9.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	}],
					games:[{
						name : "GamesStatic",
						x:1705, y:575, width:375, height:350,
						gameInstance : {
							title : {
								 logo : "observa",
								 text : "Mirosul ",
								 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								 fundal : {src : "images/games/statice/img_vol1_pg45_1.jpg",width : 487,height : 530,top : -12,left :0},
							}
					   }	
					},
					{
						name : "GamesStatic",
						x:2090, y:575, width:375, height:350,
						gameInstance : {
							title : {
								 logo : "observa",
								 text : "Văzul ",
								 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								 fundal : {src : "images/games/statice/img_vol1_pg45_2.jpg",width : 545,height : 530,top : -12,left :0},
							}
					   }	
					},
					{
						name : "GamesStatic",
						x:2480, y:575, width:375, height:350,
						gameInstance : {
							title : {
								 logo : "observa",
								 text : "Pipăitul",
								 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								 fundal : {src : "images/games/statice/img_vol1_pg45_3.jpg",width : 545,height : 530,top : -12,left :0},
							}
					   }	
					},{
						name : "GamesComplex",
						x:195, y:838, width:1171, height:831,
						gameInstance : {
							title : {
								logo : "puzzle",
								text : "Recompune imaginea",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpPuzzle.mp3",
									text :  "Trage imaginile  în ordinea corectă pentru a obține imaginea de puzzle. Imaginea de puzzle o găsești în stânga careului. " +
											"Când consideri că ai terminat, apasă butonul  VERIFICĂ, pentru a afla dacă ai  rezolvat corect sau nu. " +
											"Dacă ai greșit undeva, ți se va afișa răspunsul corect. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
							},
							gameDates : "GamesInteractivPg44_ex11",
							sarcina:"sounds/sarcini/recompuneImaginea.mp3",
						  },
			          }]
				},
				{
					page : 22,
					pageImage : "images/pagina/pg46.jpg",
					pageImage2 : "images/pagina/pg47.jpg",
					corner : true,
					btnImages : [{x : 257,y : 682,width : 110,height : 69,classCss:"btn_video"},
					             {x : 615,y : 510,width : 110,height : 69,classCss:"btn_video"},
					],
					videos:[{
		        		name : "video",
		        		x:255, y:680, width:350, height:440, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "La cules",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg46_18_livada.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	},{
		        		name : "video",
		        		x:615, y:510, width:400, height:290, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "În excursie",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg46_19_pentru_copil_planteaza_flori.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	}],
				},
				{
					page : 23,
					pageImage : "images/pagina/pg48.jpg",
					pageImage2 : "images/pagina/pg49.jpg",
					corner : true,
					btnImages : [{x : 1932,y : 347,width : 110,height : 69,classCss:"btn_video"},
					             {x : 487,y : 772,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1787,y : 512,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2377,y : 512,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 457,y : 1437,width : 110,height : 69,classCss:"btn_interactiv"}
					            ],
		            videos:[{
			        		name : "video",
			        		x:1930, y:345, width:725, height:155, 
			        		gameInstance : {
			        			title : {
			        				logo : "video",
									text : "Biblia",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol1_pg49_11.mp4",
			        			properties : {width:1066, height:600}
			        		}
			        	}],            
					games:[{
							name : "GamesStatic",
							x:485, y:770, width:670, height:570,
							gameInstance : {
								title : {
									logo : "observa",
								    text : "Hristos a răsplătit credinţa</br> unui tată îndurerat.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg48.jpg",width : 528,height : 530,top : -12,left :0},
								}
						   }
						},{
							name : "GamesStatic",
							x:1785, y:510, width:375, height:615,
							gameInstance : {
								title : {
									logo : "observa",
								    text : "Credința aduce ajutor de la Dumnezeu",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg49_1.jpg",width : 445,height : 530,top : -12,left :0},
								}
						   }
						},{
							name : "GamesStatic",
							x:2375, y:510, width:425, height:615,
							gameInstance : {
								title : {
									logo : "observa",
								    text : "Sfântul Ioan Botezătorul",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg49_2.jpg",width :368,height : 530,top : -12,left :0},
								}
						   }
						},{
							name : "GamesComplex",
							x:455, y:1435, width:917, height:298,
							gameInstance : {
								title : {
									logo : "interactiv",
									text : "Bifează răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
										text : "Bifează răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL." +
													" Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg48_ex12",
								sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
						   }
					  }]
					
					
				},
				{
					page : 24,
					pageImage : "images/pagina/pg50.jpg",
					pageImage2 : "images/pagina/pg51.jpg",
					corner : true,
					btnImages : [{x : 792,y : 462,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1660,y : 1235,width : 110,height : 69,classCss:"btn_interactiv"}],
					games:[{
						name : "GamesStatic",
						x:790, y:460, width:540, height:525,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Mergi, credința ta te-a mântuit!",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg50.jpg",width :687,height : 530,top : -12,left :0},
							}
					   }
					},{
						name : "GamesComplex",
						x:1675, y:1155, width:1180, height:400,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Alege varianta corectă.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
									text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
											"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg51_ex13",
							sarcina:"sounds/sarcini/alegeVariantaCorecta.mp3",
					   }
				  }]
					

				},
				{
					page : 25,
					pageImage : "images/pagina/pg52.jpg",
					pageImage2 : "images/pagina/pg53.jpg",
					corner : true,
					btnImages : [{x : 1827,y : 1457,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1667,y : 402,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 467,y : 762,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 350,y : 515,width : 110,height : 69,classCss:"btn_interactiv"}
					             ],
					videos:[{
		        		name : "video",
		        		x:1825, y:1455, width:755, height:280, 
		        		gameInstance : {
		        			title : {
		        				logo : "video",
								text : "Sfinţii Apostoli sunt modele de credinţă.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
							},
		        			src : "video/vol1_pg53_10.mp4",
		        			properties : {width:1066, height:600}
		        		}
		        	}],
					games:[{
							name : "GamesStatic",
							x:465, y:760, width:700, height:965,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Sfinții Apostoli",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg52.jpg",width : 410,height : 530,top :-12,left :0},
								}
			        	   }	
						
					   },{
							name : "GamesStatic",
							x:1665, y:400, width:1215, height:530,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Cei doisprezece Apostoli",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg53.jpg",width : 1000,height : 438,top : 30,left :-13},
								}
			        	   }	
							
					},{
						name : "GamesComplex",
						x:390, y:515, width:990, height:220,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Alege răspunsul corect.",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
									text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL." +
											" Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},	
							},
							gameDates : "GamesInteractivPg52_ex14",
							sarcina:"sounds/sarcini/alegeRaspunsulCorect.mp3",
					   }
				  }],
						
				},
				{
					page : 26,
					pageImage : "images/pagina/pg54.jpg",
					pageImage2 : "images/pagina/pg55.jpg",
					corner : true,
					btnImages : [{x : 252,y : 152,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 743,y : 990,width : 110,height : 69,classCss:"btn_interactiv"},
					            ],
					games:[{
							name : "GamesStatic",
							x:250, y:150, width:1080, height:710,
							gameInstance : {
								title : {
									logo : "observa",
									text : "Cina cea de Taină",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									fundal : {src : "images/games/statice/img_vol1_pg54.jpg",width : 838,height : 530,top : -12,left :0},
								}
			        	   }	
							
				  },{
						name : "GamesComplex",
						x:205, y:880, width:1210, height:650,
						gameInstance : {
							title : {
								logo : "interactiv",
								text : "Numerotează cuvintele, apoi formulează enunţurile potrivite: ",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								help : {
									src : "sounds/help/helpNumeroteazaCuvintele.mp3",
									text : "Citește cuvintele si ordonează-le astfel încât să formeze propoziții corecte, prin completarea numărului lor de ordine în spațiile indicate. " +
											"Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
											"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
								},
								
							},
							gameDates : "GamesInteractivPg54_ex15",
							sarcina:"sounds/sarcini/pg54.mp3",
						}
					}],
				},
				{
					page : 28,
					pageImage : "images/pagina/pg56.jpg",
					pageImage2 : "images/pagina/pg57.jpg",
					corner : true,
					btnImages : [{x : 350,y : 525,width : 110,height : 69,classCss:"btn_video"},
					             {x : 1727,y : 1502,width : 110,height : 69,classCss:"btn_video"},
					             {x : 352,y : 812,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1702,y : 352,width : 110,height : 69,classCss:"btn_observa"}
					             ],
		             videos:[{
			        		name : "video",
			        		x:395, y:525, width:980, height:250,
			        		gameInstance : {
			        			title : {
			        				logo : "video",
									text : "Copii în excursie.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol1_pg56_15M_impartasirea_copiilor.mp4",
			        			properties : {width:1066, height:600}
			        		}
			        	},{
			        		name : "video",
			        		x:1725, y:1500, width:860, height:240,
			        		gameInstance : {
			        			title : {
			        				logo : "video",
									text : "La biserică, în excursie",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								},
			        			src : "video/vol1_pg57_21_copii_in_biserica_in_tabara.mp4",
			        			properties : {width:1066, height:600}
			        		}
			        	}],            
					games:[{
							name : "GamesStatic",
							x:350, y:810, width:890, height:860,
							gameInstance : {
								title : {
									 logo : "observa",
									 text : "Iisus Hristos şi copiii.",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol1_pg56.jpg",width : 534,height : 530,top : -12,left :0},
								}
							}
						},
						{
							name : "GamesStatic",
							x:1700, y:350, width:550, height:450,
							gameInstance : {
								title : {
									 logo : "observa",
									 text : "La școală",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol1_pg57.jpg",width : 491,height : 530,top : -12,left :0},
								}
							}
				  }],
					
				},
				{
					page : 29,
					pageImage : "images/pagina/pg58.jpg",
					pageImage2 : "images/pagina/pg59.jpg",
					corner : true,
					btnImages : [{x : 1040,y : 1179,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 220,y : 400,width : 110,height : 69,classCss:"btn_interactiv"},
					             {x : 1673,y : 400,width : 110,height : 69,classCss:"btn_interactiv"},
					             ],
					games:[{
						name : "GamesStatic",
						x:1038, y:1177, width:343, height:560,
						gameInstance : {
							title : {
								logo : "observa",
								text : "Sfântul Andrei",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg58.jpg",width : 381,height : 530,top : -12,left :0},
							}
					   }	
					 },{
							name : "GamesComplex",
							x:218, y:325, width:1200, height:400,
							gameInstance : {
								title : {
									logo : "interactiv",
									text : "Alege răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpAlegeRaspunsulCorect.mp3",
										text : "Fă clic pe răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
												"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL." +
												" Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg58_ex16",
								sarcina:"sounds/sarcini/alegeRaspunsulCorect.mp3",
						   }
					  },{
							name : "GamesComplex",
							x:1670, y:325, width:1200, height:310,
							gameInstance : {
								title : {
									logo : "interactiv",
									text : "Formulează în mod corect îndemnurile pe care Dumnezeu le-a adresat oamenilor. ",/*Numerotează cuvintele pentru a obține enunțurile potrivite.*/
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpNumeroteazaCuvintele.mp3",
										text : "Citește cuvintele si ordonează-le astfel încât să formeze propoziții corecte, prin completarea numărului lor de ordine în spațiile indicate. " +
										"Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
										"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
							        },
									
								},
								gameDates : "GamesInteractivPg59_ex17",
								sarcina:"sounds/sarcini/pg59.mp3",
							}
						}]
					

				},
				{
					page : 30,
					pageImage : "images/pagina/pg60.jpg",
					pageImage2 : "images/pagina/pg61.jpg",
					corner : true,
					btnImages : [{x : 502,y : 557,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 792,y : 557,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1097,y : 557,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 2042,y : 227,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 1702,y : 1047,width : 110,height : 69,classCss:"btn_observa"}
					],
					games:[{
						name : "GamesStatic",
						x:500, y:555, width:215, height:290,
						gameInstance : {
							title : {
								logo :"observa",
								text : "Sfânta cruce",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg60_1.jpg",width : 353,height : 530,top : -12,left :0},
							}
						}
					},
					{
						name : "GamesStatic",
						x:790, y:555, width:240, height:290,
						gameInstance : {
							title : {
								logo :"observa",
								text : "Sfânta Evanghelie",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg60_2.jpg",width : 421,height : 530,top : -12,left :0},
							}
						}
					},
					{
						name : "GamesStatic",
						x:1095, y:555, width:200, height:290,
						gameInstance : {
							title : {
								logo :"observa",
								text : "Sfântul potir",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg60_3.jpg",width : 364,height : 530,top : -12,left :0},
							}
						}
					},
					{
						name : "GamesStatic",
						x:2040, y:225, width:470, height:330,
						gameInstance : {
							title : {
								logo :"observa",
								text : "Peşti",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg61_1.jpg",width : 688,height : 530,top : -12,left :0},
							}
						}
					},
					{
						name : "GamesStatic",
						x:1700, y:1045, width:475, height:275,
						gameInstance : {
							title : {
								logo :"observa",
								text : "Păsări",
								position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
								fundal : {src : "images/games/statice/img_vol1_pg61_2.jpg",width : 883,height : 530,top : -12,left :0},
							}
						}
					}]
					
				}, {
					page : 31,
					pageImage : "images/pagina/pg62.jpg",
					pageImage2 : "images/pagina/pg63.jpg",
					corner : true,
					btnImages : [{x : 2292,y : 1217,width : 110,height : 69,classCss:"btn_observa"},
					             {x : 165,y : 1425,width : 110,height : 69,classCss:"btn_interactiv"},
					             ],
					games:[{
							name : "GamesStatic",
							x:2290, y:1215, width:545, height:455,
							gameInstance : {
								title : {
									logo :"observa",
									 text : "Sfântul Apostol Pavel",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol1_pg63.jpg",width : 737,height : 530,top : -12,left :0},
								}
							}
					  },{
							name : "GamesComplex",
							x:180, y:1350, width:1295, height:380,
							gameInstance : {
								title : {
									logo :"interactiv",
									text : "Bifează răspunsul corect.",
									position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									help : {
										src : "sounds/help/helpBifeazaRaspunsulCorect.mp3",
										text : "Bifează  răspunsul sau răspunsurile corecte. Când crezi că ai terminat, apasă butonul  VERIFICĂ din dreapta-jos. " +
												"Nu uita că ai posibilitatea de a rezolva din nou, apăsând butonul  REPETĂ JOCUL. " +
												"Pentru a închide fereastra, apasă butonul  ÎNCHIDE aflat în colțul din dreapta-sus."
									},	
								},
								gameDates : "GamesInteractivPg62_ex18",
								sarcina:"sounds/sarcini/bifeazaRaspunsulCorect.mp3",
						   }
					  }]
					
				}, {
					page : 32,
					pageImage : "images/pagina/pg64.jpg",
					pageImage2 : "images/pagina/pg_alba.jpg",
					corner : true,
					btnImages : [{x :572,y : 287,width : 110,height : 69,classCss:"btn_observa"},
					            ],
								
					games:[{
							name : "GamesStatic",
							x:572, y:285, width:385, height:385,
							gameInstance : {
								title : {
									logo :"observa",
									 text : "Iisus Hristos",
									 position : {left : 1200,widthLogo : 110,heightLogo : 69,leftLogo : 0,topLogo : 20},
									 fundal : {src : "images/games/statice/img_vol1_pg64.jpg",width : 404,height : 530,top : -12,left :0},
								}
					       }	
				   },
				   
				   ]
			},{
				page : 33,
				pageImage : "images/pagina/coperta4.jpg",
				pageImage2 : "images/pagina/pagina_final.jpg",
				corner : false,
				
		}]
	};

	this.sounds = [

	{
		id : "click",
		src : "comune/click.mp3"
	}, {
		id : "checkRight",// corect
		src : "comune/checkRight.mp3"
	}, {
		id : "checkWrong",// gresit
		src : "comune/checkWrong.mp3"
	}, {
		id : "rightAnswer",// daca raspunde corect
		src : "comune/rightAnswer.mp3"
	}, {
		id : "rightAnswer1",// daca raspunde corect
	},{
		id : "rightAnswer2",// daca raspunde corect
		src : "comune/rightAnswer2.mp3"
	},{
		id : "rightAnswer3",// daca raspunde corect
		src : "comune/rightAnswer3.mp3"
	},{
		id : "wrongAnswer",
		src : "comune/wrongAnswer.mp3"
	}, {
		id : "wrongAnswer1",
		src : "comune/wrongAnswer1.mp3"
	}, {
		id : "wrongAnswer2",
		src : "comune/wrongAnswer2.mp3"
	}, {
		id : "wrongAnswer3",
		src : "comune/wrongAnswer3.mp3"
	}, {
		id : "wrongAnswer4",
		src : "comune/wrongAnswer4.mp3"
	},{
		id : "correctAnswer",// urmeaza raspunsul corect
		src : "comune/correctAnswer.mp3"
	}  , {
		id : "notFinish",// urmeaza raspunsul corect
		src : "comune/noInput.mp3"
	} 
	];

	this.images = [ {
		id : "empty",
		src : "imagesCommon/empty.png"
	}, {
		id : "ok",
		src : "imagesCommon/ok.png"
	}, {
		id : "wrong",
		src : "imagesCommon/wrong.png"
	}, {
		id : "tick",
		src : "imagesCommon/tick.png"
	} ];

	this.dates = {
			
			GamesInteractivPg06_ex1: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 06, noExcercise :1, totalItem : 1},  //inregistrarea rezultatelor
				noLevelImages : 4,
				imagesSrc : "images/",
				checkLength: 4,
				fundal : {src : "images/games/interactive/pg06_ex1.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '0'
				}, {
					id : 1,
					left:76,top:185 ,
					response : '1'//D-zeu
				}]
			}],	
			GamesInteractivPg08_ex2: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 08, noExcercise :2, totalItem : 1},  //inregistrarea rezultatelor
				noLevelImages : 4,
				imagesSrc : "images/",
				checkLength: 4,
				fundal : {src : "images/games/interactive/pg08_ex2.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//prin sf.botez
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'
				}]
			}],	
			GamesInteractivPg10_ex3 : [{	
				nameGame : "GamesDiffCircle", // Tipul 2 de joc
			    result : {page : 10, noExcercise :3, totalItem : 1},
			    imgTick : {src:"imagesCommon/tick.png",top:0,left:0,width :30, height : 30},//incercuiala
			    imagesSrc : "images/",
			    fundal : {src : "images/games/interactive/pg10_ex3.jpg",width : 1030,height : 530,top : -10,left : -20},
			   
			    column : 3,
			//  displayInput: "none",
			     input : {
			      width : 30, height : 30,
			     },
			     objects : [ {
			      id : 0,
			      left:130,top:370, width :30, height :30,
			      response : '0'
			     }, {
			      id : 1,
			      left:460,top:370, width :30, height :30,
			      response : '0'
			     }, {
			      id : 2,
			      left:790,top:370, width :30, height :30,
			      response : '1'//biserica
			     }]
			}],	
			GamesInteractivPg16_ex4: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 16, noExcercise :4, totalItem : 1},  //inregistrarea rezultatelor
				noLevelImages : 4,
				imagesSrc : "images/",
				checkLength: 4,
				fundal : {src : "images/games/interactive/pg16_ex4.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//turla
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'
				}]
			}],
			GamesInteractivPg23_ex5: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 23, noExcercise :5, totalItem : 1},  //inregistrarea rezultatelor
				noLevelImages : 4,
				imagesSrc : "images/",
				checkLength: 4,
				fundal : {src : "images/games/interactive/pg23_ex5.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//flori
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'
				}]
			}],
			GamesInteractivPg26_ex6: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 26, noExcercise :6, totalItem : 1},  //inregistrarea rezultatelor
				noLevelImages : 4,
				imagesSrc : "images/",
				checkLength: 4,
				fundal : {src : "images/games/interactive/pg26_ex6.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//pastram linistea si curatenia
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'
				}]
			}],
			GamesInteractivPg27_ex7: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 27, noExcercise :7, totalItem : 1},  //inregistrarea rezultatelor
				noLevelImages : 4,
				imagesSrc : "images/",
				checkLength: 4,
				fundal : {src : "images/games/interactive/pg27_ex7.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '0'
				}, {
					id : 1,
					left:76,top:185 ,
					response : '1'//ne comportam civilizat
				}]
			}],
			GamesInteractivPg27_ex8 : [{
				   nameGame : "GamesColors",
					imagesSrc : "images/games/interactive/pg27_ex8_coloring/",
				    result : {page : 27, noExcercise :8, totalItem : 5},
				    soundsSrc : "sounds/interactive/",
					pencil : {
						src : "images/games/interactive/pg27_ex8_coloring/pencils/",
						width : 110,height : 110
					},
					fundal : {
						src : "images/games/interactive/pg27_ex8_coloring/fundal.png",
						width : 1052,height : 530,top : -10,left : -30
					},
					pencils : [ {
						id : 0,
						image : 'blue1.png',
						imageSelected : 'blue2.png',
						color : "blue",
						top : 10,left : 0,
					},
					{
						id : 1,
						image : 'red1.png',
						imageSelected : 'red2.png',
						color : "red",
						top : 145,left : 0,
					}
					],
					objects : [ {
						id : 0,
						imageFolder : 'nor1/',//neastamparat
						width : 364,height : 201,left : -24,top : 269,
						response : "red"
					},{
						id : 1,
						imageFolder : 'nor2/',//cuminte
						width : 304,height : 168,left : 179,top : 66,
						response : "blue"
					}, {
						id : 2,
						imageFolder : 'nor3/',//ascultator
						width : 320,height : 179,left:361,top:288,
						response : "blue"
					}, {
						id : 3,
						imageFolder : 'nor4/',//neascultator
						width :283,height : 157,left:580,top:71,
						response : "red"
					},{
						id : 4,
						imageFolder : 'nor5/',//atent
						width : 312,height : 173,left:694,top:292,
						response : "blue"
					}]
			   }],
			GamesInteractivPg36_ex9 : [{
				nameGame : "GamesWriteNumbers",
				result : {page : 36,noExcercise :9,totalItem : 6},
				imagesSrc : "images/",
				columns: 1,
				fundal : {src : "images/games/interactive/pg36_ex9.jpg",width :883,height : 530,top : -10,left : 50},
				colorInput:"border-color: #C08651; box-shadow: 0 0 10px #A77649;border:2;font-size:25px;",
				overColor:"0 0 10px #A77649",
				outColor:"0 0 10px #A77649",
				objects : [ {
					id : 0,
					left:160,top:185, width:40, height : 40, maxlength:1,//Preotul
					response : '1'
				}, {
					id : 1,
					left:360,top:185, width:40, height : 40, maxlength:1,//Sf. Evanghelie
					response : '6'
				}, {
					id : 2,
					left:570,top:185,  width:40, height : 40, maxlength:1,//cuvantul
					response : '3'
				}, {
					id : 3,
					left:790,top:185, width:40, height : 40, maxlength:1,//citeste
					response : '2'
				},{
					id : 4,
					left:290,top:340, width:40, height : 40, maxlength:1,//lui Dunezeu
					response : '4'
				},{
					id : 5,
					left:670,top:340, width:40, height : 40, maxlength:1,//din
					response : '5'
				}]
			}],
			GamesInteractivPg43_ex10 : [{
				   nameGame : "GamesColors",
					imagesSrc : "images/games/interactive/pg43_ex10_coloring/",
				    result : {page : 43, noExcercise :10, totalItem : 6},
				    soundsSrc : "sounds/interactive/",
					pencil : {
						src : "images/games/interactive/pg43_ex10_coloring/pencils/",
						width : 110,height : 110
					},
					fundal : {
						src : "images/games/interactive/pg43_ex10_coloring/fundal.png",
						width : 723,height : 530,top : -20,left : 100
					},
					pencils : [ {
						id : 0,
						image : 'blue1.png',
						imageSelected : 'blue2.png',
						color : "blue",
						top : 10,left : 0,
					},
					{
						id : 1,
						image : 'red1.png',
						imageSelected : 'red2.png',
						color : "red",
						top : 145,left : 0,
					}
					],
					objects : [ {
						id : 0,
						imageFolder : 'nor1/',//este atent
						width :176,height : 100,left : 106,top : 154,
						response : "blue"
					},{
						id : 1,
						imageFolder : 'nor2/',//asculta
						width :176,height : 97,left : 138,top : 284,
						response : "blue"
					}, {
						id : 2,
						imageFolder : 'nor3/',//nu asculta
						width :176,height : 99,left:186,top:406,
						response : "red"
					}, {
						id : 3,
						imageFolder : 'nor4/',//invata
						width :176,height : 97,left:563,top:89,
						response : "blue"
					},{
						id : 4,
						imageFolder : 'nor5/',//ete neatent
						width :176,height : 97,left:517,top:227,
						response : "red"
					},{
						id :5,
						imageFolder : 'nor6/',//intelege
						width :177,height : 98,left:638,top:350,
						response : "blue"
					}]
			   }],
			GamesInteractivPg44_ex11 : [{
				nameGame : "GamesPuzzle",
				result : {page : 44,noExcercise :16,totalItem : 16},
				imagesSrc : "images/games/interactive/pg44_ex11_puzzle/",
				fundal : {src : "images/games/interactive/pg44_ex11_puzzle/previewImg.jpg",width : 208,height : 150,top : 20,left : 0},
				dropArea : {width : 464,height : 304,top :18,left : 268},
				columns: 1,
				objects : [ {
					id : 0,
					left:10,top:420,width:115,height:75,src : "piesa16.jpg",response:15
				}, {
					id : 1,
					left:130,top:420,width:115,height:75,src : "piesa7.jpg",response:6
				}, {
					id : 2,
					left:250,top:420,width:115,height:75,src : "piesa14.jpg",response:13
					 
				},  {
					id : 3,
					left:370,top:420,width:115,height:75,src : "piesa13.jpg",response:12
					 
				},{
					id : 4,
					left:490,top:420,width:115,height:75,src : "piesa8.jpg",response:7
					
				}, {
					id : 5,
					left:610,top:420,width:115,height:75,src : "piesa5.jpg",response:4
					 
				},{
					id : 6,
					left:730,top:420,width:115,height:75,src : "piesa1.jpg",response:0
				}, {
					id : 7,
					left:850,top:420,width:115,height:75,src : "piesa4.jpg",response:3
					 
				}, {
					id : 8,
					left:10,top:330,width:115,height:75,src : "piesa10.jpg",response:9
					 
				},  {
					id : 9,
					left:130,top:330,width:115,height:75,src : "piesa2.jpg",response:1
					 
				},{
					id : 10,
					left:250,top:330,width:115,height:75,src : "piesa11.jpg",response:10
					
				}, {
					id : 11,
					left:370,top:330,width:115,height:75,src : "piesa3.jpg",response:2
					 
				},{
					id : 12,
					left:490,top:330,width:115,height:75,src : "piesa6.jpg",response:5
				}, {
					id : 13,
					left:610,top:330,width:115,height:75,src : "piesa9.jpg",response:8
					 
				}, {
					id : 14,
					left:730,top:330,width:115,height:75,src : "piesa12.jpg",response:11
					 
				},  {
					id : 15,
					left:850,top:330,width:115,height:75,src : "piesa15.jpg",response:14
					 
				}],
				area : [ {
					id : 0,
					left:270,top:20,width:115,height:75
				}, {
					id : 1,
					left:385,top:20,width:115,height:75
				}, {
					id : 2,
					left:500,top:20,width:115,height:75
				}, {
					id : 3,
					left:615,top:20,width:115,height:75
				}, {
					id : 4,
					left:270,top:95,width:115,height:75
				}, {
					id : 5,
					left:385,top:95,width:115,height:75
				},{
					id : 6,
					left:500,top:95,width:115,height:75
				}, {
					id : 7,
					left:615,top:95,width:115,height:75
				}, {
					id : 8,
					left:270,top:170,width:115,height:75
				}, {
					id : 9,
					left:385,top:170,width:115,height:75
				}, {
					id : 10,
					left:500,top:170,width:115,height:75
				}, {
					id : 11,
					left:615,top:170,width:115,height:75
				},{
					id : 12,
					left:270,top:245,width:115,height:75
				}, {
					id : 13,
					left:385,top:245,width:115,height:75
				}, {
					id : 14,
					left:500,top:245,width:115,height:75
				}, {
					id : 15,
					left:615,top:245,width:115,height:75
				}]
			}],
			GamesInteractivPg48_ex12: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 48, noExcercise :12, totalItem : 1},  //inregistrarea rezultatelor
				//noLevelImages : 4,
				imagesSrc : "images/",
				//checkLength: 4,
				fundal : {src : "images/games/interactive/pg48_ex12.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//o carte importanta a crestinilor
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'//ne comportam civilizat
				}]
			}],
			GamesInteractivPg51_ex13: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 51, noExcercise :13, totalItem : 2},  //inregistrarea rezultatelor
				//noLevelImages : 4,
				imagesSrc : "images/",
				//checkLength: 4,
				fundal : {src : "images/games/interactive/pg51_ex13.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//ascult de părinţii mei;
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'
				},{
					id : 2,
					left:76,top:292 ,
					response : '1'//îmi ajut colegii de clasă;
				}, {
					id : 3,
					left:76,top:322 ,
					response : '0'
				}]
			}],
			GamesInteractivPg52_ex14: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 52, noExcercise :14, totalItem : 1},  //inregistrarea rezultatelor
				//noLevelImages : 4,
				imagesSrc : "images/",
				//checkLength: 4,
				fundal : {src : "images/games/interactive/pg52_ex14.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:187 ,
					response : '0'
				}, {
					id : 1,
					left:76,top:217 ,
					response : '1'//Iisus Hristos
				}]
			}],
			GamesInteractivPg54_ex15 : [{
				nameGame : "GamesWriteNumbers",
				result : {page : 54,noExcercise :15,totalItem : 7},
				imagesSrc : "images/",
				columns: 1,
				fundal : {src : "images/games/interactive/pg54_ex15.jpg",width :883,height : 530,top : -10,left : 50},
				colorInput:"border-color: #C08651; box-shadow: 0 0 10px #A77649;border:2;font-size:25px;",
				overColor:"0 0 10px #A77649",
				outColor:"0 0 10px #A77649",
				objects : [ {
					id : 0,
					left:160,top:160, width:40, height : 40, maxlength:1,//toate
					response : '3'
				}, {
					id : 1,
					left:360,top:160, width:40, height : 40, maxlength:1,//popoarele
					response : '4'
				}, {
					id : 2,
					left:570,top:160,  width:40, height : 40, maxlength:1,//Mergand
					response : '1'
				}, {
					id : 3,
					left:790,top:160, width:40, height : 40, maxlength:1,//invatati
					response : '2'
				},{
					id : 4,
					left:240,top:330, width:40, height : 40, maxlength:1,//Mine
					response : '3'
				},{
					id : 5,
					left:430,top:330, width:40, height : 40, maxlength:1,//Veniti
					response : '1'
				},{
					id : 6,
					left:660,top:330, width:40, height : 40, maxlength:1,//dupa
					response : '2'
				}]
			}],
			GamesInteractivPg58_ex16: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 58, noExcercise :16, totalItem : 1},  //inregistrarea rezultatelor
				//noLevelImages : 4,
				imagesSrc : "images/",
				//checkLength: 4,
				fundal : {src : "images/games/interactive/pg58_ex16.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '1'//mă spovedesc şi mă împărtăşesc;
				}, {
					id : 1,
					left:76,top:185 ,
					response : '0'
				}]
			}],
			GamesInteractivPg59_ex17:[{
			nameGame : "GamesWriteNumbers",
			result : {page : 59,noExcercise :17,totalItem : 9},
			imagesSrc : "images/",
			columns: 1,
			fundal : {src : "images/games/interactive/pg59_ex17.jpg",width :883,height : 530,top : -10,left : 50},
			colorInput:"border-color: #C08651; box-shadow: 0 0 10px #A77649;border:2;font-size:25px;",
			overColor:"0 0 10px #A77649",
			outColor:"0 0 10px #A77649",
			objects : [ {
				id : 0,
				left:210,top:157, width:40, height : 40, maxlength:1,//Invatati
				response : '1'
			}, {
				id : 1,
				left:385,top:157, width:40, height : 40, maxlength:1,//binele
				response : '4'
			}, {
				id : 2,
				left:557,top:157,  width:40, height : 40, maxlength:1,//faceti
				response : '3'
			}, {
				id : 3,
				left:730,top:157, width:40, height : 40, maxlength:1,//sa
				response : '2'
			},{
				id : 4,
				left:95,top:330, width:40, height : 40, maxlength:1,//Dar
				response : '1'
			},{
				id : 5,
				left:280,top:330, width:40, height : 40, maxlength:1,//rai
				response : '5'
			},{
				id : 6,
				left:455,top:330, width:40, height : 40, maxlength:1,//din
				response : '2'
			},{
				id : 7,
				left:625,top:330, width:40, height : 40, maxlength:1,//se face
				response : '4'
			},{
				id : 8,
				left:820,top:330, width:40, height : 40, maxlength:1,//dar
				response : '3'
			}]
		}],
			GamesInteractivPg62_ex18: [{              //numele jocului 
				nameGame : "GamesChooseRadioBox",
				result : {page : 62, noExcercise :18, totalItem : 1},  //inregistrarea rezultatelor
				//noLevelImages : 4,
				imagesSrc : "images/",
				//checkLength: 4,
				fundal : {src : "images/games/interactive/pg62_ex18.jpg",width : 1030,height : 530,top : -10,left : -20},
				//respose 1: first radiobox selected, 2:second radiobox selected 
				input : {
					width : 24,
					height : 24
				},
				objects : [ {
					id : 0,
					left:76,top:155 ,
					response : '0'
				}, {
					id : 1,
					left:76,top:185 ,
					response : '1'//12 apostoli
				}]
			}],
			
			
	};
};

GameDates.prototype.getDates = function() {
	return this.dates;
};