"use strict";(self.webpackChunkhypegienic_landing=self.webpackChunkhypegienic_landing||[]).push([[963],{2001:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3875);\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1749);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2318);\n/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6847);\n/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2302);\n/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9613);\n/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7394);\n/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8222);\n/* harmony import */ var _store_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5231);\n/* harmony import */ var _landing_page_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5293);\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = (0,_material_ui_styles__WEBPACK_IMPORTED_MODULE_3__/* [\"default\"] */ .Z)((theme) => ({\n    container: {\n        width: '100vw',\n        minHeight: '100vh',\n        display: 'flex',\n        flexDirection: 'column',\n        justifyContent: 'space-between',\n        alignItems: 'center'\n    },\n    pageContainer: {\n        width: '1200px',\n        maxWidth: '100%',\n        minHeight: '100vh',\n        padding: '32px',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            padding: '16px',\n        },\n        ['& $bordered:not(:last-child)']: {\n            borderBottom: 'none'\n        }\n    },\n    bordered: {\n        maxWidth: '100%',\n        padding: '16px',\n        borderColor: theme.palette.text.primary,\n        borderWidth: '2px',\n        borderStyle: 'solid'\n    },\n    title: {\n        lineHeight: 1\n    },\n    titleLine: {\n        flex: 1,\n        width: '16px',\n        borderWidth: '2px',\n        borderColor: theme.palette.primary.main,\n        borderStyle: 'solid',\n        marginBottom: '6px',\n        backgroundImage: `repeating-linear-gradient(${[\n            '135deg',\n            'rgba(255, 255, 255, 0)',\n            'rgba(255, 255, 255, 0) 8px',\n            `${theme.palette.primary.main} 8px`,\n            `${theme.palette.primary.main} 10px`\n        ].join(', ')})`,\n        overflow: 'hidden',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            marginBottom: '4px'\n        }\n    },\n    titleColumn: {\n        display: 'flex',\n        flexDirection: 'column',\n        marginTop: '8px',\n        marginBottom: '8px',\n        width: '32px',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            marginTop: '6px',\n            marginBottom: '6px'\n        },\n        ['& $numberLine:after']: {\n            borderColor: theme.palette.primary.main\n        }\n    },\n    numberColumn: {\n        display: 'flex',\n        flexDirection: 'column',\n        marginTop: '8px',\n        marginBottom: '8px',\n        width: '28px',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            marginTop: '6px',\n            marginBottom: '6px'\n        }\n    },\n    unnumberedLine: {\n        flex: 1,\n        position: 'relative',\n        width: '16px',\n        minHeight: '2px',\n        margin: '4px 0',\n        overflow: 'hidden',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            margin: '3px 0'\n        },\n        ['&:after']: {\n            content: '\" \"',\n            position: 'absolute',\n            top: '0',\n            height: '100%',\n            width: '100%',\n            borderWidth: '2px',\n            borderColor: theme.palette.text.primary,\n            borderStyle: 'solid'\n        }\n    },\n    numberText: {\n        width: '16px',\n        fontFamily: 'Exan, Monaco, monospace',\n        fontWeight: 600,\n        marginBottom: '2px',\n    },\n    numberLine: {\n        flex: 1,\n        position: 'relative',\n        width: '16px',\n        minHeight: '2px',\n        marginBottom: '6px',\n        overflow: 'hidden',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            marginBottom: '4px'\n        },\n        ['&:after']: {\n            content: '\" \"',\n            position: 'absolute',\n            top: '0',\n            height: '100%',\n            width: '100%',\n            borderWidth: '2px',\n            borderColor: theme.palette.text.primary,\n            borderStyle: 'solid'\n        }\n    },\n    numberedContent: {\n        position: 'relative',\n        flex: 1,\n        display: 'flex',\n        flexDirection: 'column',\n        marginTop: '6px',\n        marginBottom: '6px',\n        overflowX: 'hidden',\n        [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {\n            marginTop: '4px',\n            marginBottom: '4px'\n        }\n    },\n    table: {\n        marginRight: '6px',\n        ['& table']: {\n            borderCollapse: 'collapse'\n        },\n        ['& table td']: {\n            verticalAlign: 'top',\n            padding: '8px 12px',\n            borderWidth: '2px',\n            borderColor: theme.palette.text.primary,\n            borderStyle: 'solid'\n        }\n    }\n}));\nconst PrivacyPolicyPage = () => {\n    const [{ type: screenType }] = (0,_store_screen__WEBPACK_IMPORTED_MODULE_1__/* .useScreenState */ .j)();\n    const classes = useStyles({});\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n        document.body.style.backgroundColor = 'white';\n    }, []);\n    const padLeft = (content, width) => {\n        const string = content.toString();\n        return `${Array(width - string.length).fill('0').join('')}${string}`;\n    };\n    const displaySections = (section, index) => (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { key: index, className: classes.bordered },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { container: true, direction: 'row', alignItems: 'stretch' },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.titleColumn },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'primary', variant: 'caption', align: 'right', classes: { root: classes.numberText } }, padLeft(index + 1, 2)),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberLine })),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberedContent },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_landing_page_spinner__WEBPACK_IMPORTED_MODULE_2__/* [\"default\"] */ .Z, { sentence: section.title, color: 'primary', variant: ['xs-phone', 'sm-tablet'].includes(screenType) ? 'h5' : 'h4', classes: { root: classes.title } }))),\n        section.contents.map((content, index) => {\n            var _a;\n            return content.type === 'table'\n                ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { container: true, direction: 'row', alignItems: 'stretch' },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberColumn }),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberedContent },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_6__/* [\"default\"] */ .Z, { className: classes.table },\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_7__/* [\"default\"] */ .Z, null,\n                                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_8__/* [\"default\"] */ .Z, null, content.datum.map((row, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_9__/* [\"default\"] */ .Z, { key: index }, row.map((data, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__/* [\"default\"] */ .Z, { key: index },\n                                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'textPrimary', variant: ['xs-phone', 'sm-tablet'].includes(screenType) ? 'body1' : 'h6' }, data)))))))))))\n                : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { container: true, direction: 'row', alignItems: 'stretch' },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberColumn },\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'textPrimary', variant: 'caption', align: 'right', classes: { root: classes.numberText } }, padLeft(index + 1, 2)),\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberLine })),\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberedContent },\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'textPrimary', variant: ['xs-phone', 'sm-tablet'].includes(screenType) ? 'body1' : 'h6' }, content.point))), (_a = content.subPoints) === null || _a === void 0 ? void 0 :\n                    _a.map((point, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { key: index, container: true, direction: 'row', alignItems: 'stretch' },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberColumn }),\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberColumn },\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'textPrimary', variant: 'caption', align: 'right', classes: { root: classes.numberText } }, padLeft(String.fromCharCode(97 + index), 2)),\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberLine })),\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberedContent },\n                            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'textPrimary', variant: ['xs-phone', 'sm-tablet'].includes(screenType) ? 'body1' : 'h6' }, point))))));\n        })));\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.container },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { container: true, direction: 'column', justifyContent: 'center', alignItems: 'center', classes: { container: classes.pageContainer } },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.bordered },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { container: true, direction: 'row', alignItems: 'stretch' },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.titleColumn },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.titleLine })),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberedContent },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_landing_page_spinner__WEBPACK_IMPORTED_MODULE_2__/* [\"default\"] */ .Z, { sentence: 'PERSONAL DATA AND PRIVACY POLICY', color: 'primary', variant: ['xs-phone', 'sm-tablet'].includes(screenType) ? 'h5' : 'h4', classes: { root: classes.title } }))),\n                [\n                    'This Privacy Notice describe how we, (HYPE X GIENIC SDN. BHD.) and our respective subsidiaries and associated companies (collectively, “HypeGienic”, “we”, “us” or “our”) collect, use, process, and disclose your Personal Data (defined below) through the use of our HypeGienic website https://www.hypegienic.com/ (“Site”) and/or Mobile platform (“App”) (collectively, “Platform”).',\n                    'This Notice applies to our consumers, agents, vendors, suppliers, partners (driver and/or merchant partner), contractors and service providers (collectively “you”).',\n                    '“Personal Data” is any information which can be used to identify you or from which you are identifiable. This includes but not limited to your name, nationality, telephone number, device ID, bank and credit card details, email address, your image, government-issued identification numbers, race, date of birth, and vehicle and insurance information).'\n                ].map(step => react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__/* [\"default\"] */ .Z, { key: step, container: true, direction: 'row', alignItems: 'stretch' },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberColumn },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.unnumberedLine })),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: classes.numberedContent },\n                        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__/* [\"default\"] */ .Z, { color: 'textPrimary', variant: ['xs-phone', 'sm-tablet'].includes(screenType) ? 'body1' : 'h6' }, step))))),\n            [{\n                    title: 'COLLECTION OF PERSONAL DATA',\n                    contents: [{\n                            type: 'point',\n                            point: 'We collect Personal Data about you in the ways listed below. We collect your Personal Data when you voluntarily provide it to us.'\n                        }, {\n                            type: 'point',\n                            point: 'We may collect your Personal Data through these means (but not limited thereto):',\n                            subPoints: [\n                                'complete a user profile or registration forms (such as your name, contact information and other identification information as required);',\n                                'interact with our social media pages;',\n                                'interact with our Platform;',\n                                'participate in contests or events organised by us;',\n                                'verify your identity through various means (such as social media logins, submission of images).'\n                            ]\n                        }, {\n                            type: 'point',\n                            point: 'In certain circumstances, you may need to provide your Personal Data in order to comply with legal requirements or contractual obligations, or where it is necessary to conclude a contract. Failure to provide such Personal Data, under such circumstances as determined by us, may constitute a failure to comply with legal requirements or contractual obligations, or inability to conclude a contract with you, as the case may be.'\n                        }, {\n                            type: 'point',\n                            point: 'If you are a driver partner, we may collect:',\n                            subPoints: [\n                                'telematics data (such as your speed, acceleration, and braking data);',\n                                'device data (such as accelerometer data, GPS location);',\n                                'your vehicle registration data; and',\n                                'personal data that may be captured through your interaction with us or our agents.'\n                            ]\n                        }, {\n                            type: 'point',\n                            point: 'As a parent or legal guardian, please do not allow minors under your care to submit Personal Data to us. In the event that such Personal Data of a minor is disclosed to us, you hereby consent to the processing of the minor’s Personal Data and accept and agree to be bound by this Notice and take responsibility for his or her actions.'\n                        }]\n                }, {\n                    title: 'USE OF PERSONAL DATA',\n                    contents: [{\n                            type: 'point',\n                            point: 'You consent to HypeGienic using your Personal Data as provided by you to HypeGienic from time to time when you use the Platform.'\n                        }, {\n                            type: 'point',\n                            point: 'Your Personal Data will be used for the following purpose (including but not limited thereto):',\n                            subPoints: [\n                                'provide you with our Services (defined in Terms and Condition);',\n                                'engage you to provide Services;',\n                                'create, administer and update your account;',\n                                'conduct due diligence checks and risk assessments;',\n                                'verify your identity; and',\n                                'make your experience more seamless.'\n                            ]\n                        }, {\n                            type: 'point',\n                            point: 'We may use the Personal Data to investigate and resolve claims or disputes, or as allowed or required by the applicable law. We may use Personal Data without consent, as allowed or required by the applicable law, for purposes such as detection and prevention of fraud. We may also use the Personal Data where we are required, advised, recommended, expected or requested to do so by our legal advisors or other regulatory or government authorities. We may use your Personal Data to:',\n                            subPoints: [\n                                'comply with court orders or other legal, governmental or regulatory requirements;',\n                                'enforce our Terms or other agreements;',\n                                'protect our rights or property in the event of a claim or dispute.'\n                            ]\n                        }, {\n                            type: 'point',\n                            point: 'We may also use your Personal Data in connection with mergers, acquisitions, joint ventures, sale of company assets, consolidation, restructuring, financing, business asset transactions, or acquisition of all or part of our business by another company.'\n                        }, {\n                            type: 'point',\n                            point: 'We may use your Personal Data for marketing purposes. If you wish to unsubscribe to the processing of your Personal Data for marketing and promotions, please click on the subscribe link in the relevant email or messages.'\n                        }]\n                }, {\n                    title: 'DISCLOSURE OF PERSONAL DATA',\n                    contents: [{\n                            type: 'point',\n                            point: 'We need to share Personal Data with various parties in connection with our Services.'\n                        }, {\n                            type: 'point',\n                            point: 'We may disclose your Personal Data to the drivers of the participating vehicles as may be necessary, including, without limitation for the purposes of acceptance of delivery by a vehicle’s driver, confirmation/clarification of the booking information between you and the driver.'\n                        }, {\n                            type: 'point',\n                            point: 'HypeGienic may disclose to you Personal Data belonging to another individual during the provision of the Services. You represent and warrant that you shall not use the Personal Data of such individual for any purpose other than for purposes of using the Services.'\n                        }]\n                }, {\n                    title: 'RETENTION OF PERSONAL DATA',\n                    contents: [{\n                            type: 'point',\n                            point: 'We retain your Personal Data for the period necessary to fulfil the Services unless a longer retention period is required or allowed by law. Once your Personal Data is no longer necessary for the Services, or we no longer have a legal or business purpose for retaining your Personal Data, we take steps to erase, destroy, anonymise or prevent access or use of such Personal Data for any purpose other than compliance with this Notice, or for purposes of safety, security, fraud prevention and detection, in accordance with the requirements of applicable laws.'\n                        }, {\n                            type: 'point',\n                            point: 'We will take reasonable legal, organisational and technical measures to ensure that your Personal Data is protected. This includes measures to prevent Personal Data from getting lost, or used or accessed in an unauthorised way. We limit access to your Personal Data to our employees on a need to know basis. Those processing your Personal Data will only do so in an authorised manner and are required to treat your information with confidentiality. Nevertheless, please understand that the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Data, we cannot guarantee the security of your Personal Data transmitted through any online means, therefore, any transmission remains at your own risk.'\n                        }, {\n                            type: 'point',\n                            point: 'In accordance with the applicable laws and regulations, you may be entitled to:',\n                            subPoints: [\n                                'ask us about the processing of your Personal Data, including to be provided with a copy of your Personal Data;',\n                                'request the correction and/or (in some cases) deletion of your Personal Data;',\n                                'in some cases, request the restriction of the processing of your Personal Data, or object to that processing;',\n                                'withdraw your consent to the processing of your Personal Data (where we are processing your Personal Data based on your consent);',\n                                'complain to the relevant data privacy authority if your data privacy rights are violated, or if you have suffered as a result of unlawful processing of your Personal Data.'\n                            ]\n                        }, {\n                            type: 'point',\n                            point: 'Where you are given the option to share your Personal Data with us, you can always choose not to do so. If we have requested your consent to processing and you later choose to withdraw it, we will respect that choice in accordance with our legal obligations. However, choosing not to share your Personal Data with us or withdrawing your consent to our use of it could mean that we are unable to perform the actions necessary to provide our Services.'\n                        }, {\n                            type: 'point',\n                            point: 'To withdraw consent from us collecting your data, you may email us at support@hypegienic.com. We will process such requests accordingly. You agree that by your withdrawal of consent, you may not be able to continue using our Services in full or have full access to our Platform and we may terminate the contract you have with us. We will liaise with you if we are unable to verify your identity or understand your instructions.'\n                        }]\n                }].map(displaySections))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivacyPolicyPage);\n\n\n//# sourceURL=webpack://hypegienic-landing/./src/client/components/privacy-policy-page/index.tsx?")}}]);