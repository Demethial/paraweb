import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import SplitText from 'react-pose-text';
import posed from 'react-pose';

import CrosscheckImg from '../assets/services/crosscheckWithCircleImg';
import blockchainIMG from '../assets/blockchainTiny.jpg';
import smartContractIMG from '../assets/smart-contract.jpg';
import linkedWorldIMG from '../assets/linkedWorld.jpg';
import transportationIMG from '../assets/transportation.jpg';
import blockchainBackgroundIMG from '../assets/blockchain.jpg';

const textAnimationConfig = {
    exit: { y: 20, opacity: 0 },
    enter: {
        y: 0,
        opacity: 1,
        delay: ({ charIndex }) => charIndex * 80
    }
};

const textFaddingConfig = {
    show: {
        transition: { duration: 1000, ease: 'linear' },
        opacity: 1,
        delayChildren: 1700,
        staggerChildren: 600
    },
    hide: {
        opacity: 0
    },
}
const Spann = posed.span({
    show: { y: 0, opacity: 1, transition: ({ i }) => ({ duration: 600, ease: 'linear' }), },
    hide: { y: 20, opacity: 0 }
});

const FaddingSpan = posed.span(textFaddingConfig);

class WhyScreen extends React.Component {

    state = { faddingSpanVisible: 'hide' }

    componentDidMount() {
        this.setState({ faddingSpanVisible: 'show' });
    }

    render() {
        const { classes } = this.props;
        return (
            <div style={{
                maxHeight: '100vh',
                overflow: 'scroll'
            }}>
                {/* --------------------- Primera seccion ----------------------*/}
                <div className={classes.containers} style={{ height: '80vh', backgroundColor: 'rgba(0,0,0,0.02)', marginTop: 50, }}>
                    <div className={classes.textFirstSection}>
                        <b>
                            <SplitText initialPose="exit" pose="enter" charPoses={textAnimationConfig}>
                                Paradigma CrossCheck ©
                            </SplitText>
                        </b>
                        <FaddingSpan pose={this.state.faddingSpanVisible} style={{}}>
                            <Spann i={1}>
                                &nbsp;is a platform for business growth based on smart contracts and IoT devices.
                            </Spann>
                            <br />
                            <br />
                            <Spann i={2}>
                            Providing a platform of decentralized applications (DAPP) facilitates
business development through the interaction, creation, use and exchange
of smart contracts between professionals, enterprises and organizations
under a monitored environment by blockchain integrating Internet of
Things (IoT) devices.
                            </Spann>
                        </FaddingSpan>
                    </div>
                    <div style={{ width: '10%' }} />
                    <div className={classes.crosschekImage}>
                        <CrosscheckImg style={{ marginLeft: -2 }} width='100%' />
                    </div>
                </div>
                {/* --------------------- Segunda seccion ----------------------*/}
                <div className={classes.containerSecondSection} style={{ paddingTop: '3vh', paddingBottom: '3vh' }}>
                    <div className={classes.blockchainTinyImage}>
                        <img src={blockchainIMG} style={{ width: '100%' }} />
                    </div>
                    <div style={{ width: '5%' }} />
                    <div className={classes.textSecondSection} >
                        <Typography variant='h6' align='center' paragraph>
                            <b>Introduction (problem at its basis)</b>
                        </Typography>
                        <Typography variant='subtitle1'>
                            Paradigma CrossCheck has been inspired by a culture of cooperation and reciprocity in small communities. Paradigma has been at the forefront of helping communities in need for more than 20 years. On the other hand, it acknowledges from its experience that people, groups, companies and organizations have difficulties to cooperate with each other. They tend to protect their acquired knowledge, status and resources. A more decentralized and interactive economy will not necessarily develop in a natural way if people do not have the tools to do so. It is for that reason that Paradigma CrossCheck has comes to life. Taking advantage of the trustless system inherent to blockchain technology, Paradigma CrossCheck opens the possibility for everyone to develop a startup or enhance existing business by securing safe interactions and transactions.
                        </Typography>
                    </div>
                </div>
                {/* --------------------- Tercera seccion ----------------------*/}
                <div style={{ position: 'relative' }}>
                    <div className={classes.parallaxLinkedWorld} style={{ height: '100%', width: '100%', zIndex: 1, position: 'absolute', }} />
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', paddingTop: '5%', paddingBottom: '5%', alignItems: 'center', flexDirection: 'column', zIndex: 2, position: 'relative' }}>
                        <div className={classes.textThirdSection}>
                            <Typography variant='h5' paragraph align='center' >
                                <b style={{ color: 'white' }}>From a centralized to a decentralized society</b>
                            </Typography>
                            <Typography variant='h6' color='inherit'>
                                A society can be seen as a stream of events and interactions in time from which some will have more impact than others. From such events, rules, procedures, legislation and a sense of what is right or wrong will guide our perceptions, creating a culture around it. From within such development, organizations and institutions evolve that reaffirm our status and thus create a new way of thinking. Centralization for that matter has become the prevalent way to organize our societies. This does not mean that this is the best way forward. Decentralization opens a new dynamic for innovation. In a more decentralized society, power will be more widely distributed. We believe that a more decentralized economy will empower people, make them more creative and better protect the interests of individuals and businesses.
                        </Typography>
                        </div>
                    </div>
                </div>
                {/* --------------------- Cuarta seccion ----------------------*/}
                <div className={classes.containerSecondSection} style={{ paddingTop: '3vh', paddingBottom: '3vh' }}>
                    <div className={classes.contractImage}>
                        <img src={smartContractIMG} style={{ width: '100%' }} />
                    </div>
                    <div style={{ width: '5%' }} />
                    <div className={classes.textSecondSection} >
                        <Typography variant='h6' paragraph>
                            <b>Providing basic tools to start decentralizing</b>
                        </Typography>
                        <Typography variant='subtitle1'>
                            CrossCheck is a system for crosschecking events. Crosschecking of events is done by agreed procedures stipulated in a smart contract comparable to a legal contract. The agreed provisions of such a contract form the basis for interactions between members of the Crosscheck community. The bigger the community becomes, the stronger it will be, offering ever more business options for its members. Crosscheck offers rock solid security: when conditions are off limits, the contract will immediately activate and notify the parties sharing the information of such deviation. When agreed conditions are met, business transactions will proceed as usual. As per contract, information will be tracked and accumulated in a distributed manner with full privacy protection. Crosscheck provides the necessary flexibility to adapt the parameters of your business enabling you to safely start a new strand of business activity when needed.
                        </Typography>
                    </div>
                </div>
                {/* --------------------- Middle seccion --------------------- */}
                <div className={classes.containers} style={{ backgroundColor: '#282E34', paddingBottom: '4%', paddingTop: '4%' }}>
                    <Typography variant='h4' align='center' >
                        <b style={{ color: 'white' }}>A few examples</b>
                    </Typography>
                </div>
                {/* --------------------- Quinta seccion ----------------------*/}
                <div className={classes.containers} style={{ paddingTop: '4%', paddingBottom: '3%', }}>
                    <div className={classes.textFifthSection}>
                        <div style={{ textAlign: 'center' }}>
                            <Typography variant='h5' paragraph>
                                <b>Solving pizza delivery problem</b>
                            </Typography>
                        </div>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            A pizzeria wants to deliver its products in the best conditions to its customer. For that purpose, it hires an individual or company that takes the pizza to its destination. Great! However, how often haven’t we had our pizza delivered lukewarm, cold or soggy? Wouldn’t it be great if the restaurant, its delivery service and costumers could keep track of temperature and humidity to optimize the conditions of the pizza?
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            Paradigma CrossCheck is a Dapp that tracks data in a ledger creating smart contracts for specific business agreements and collaborations, allowing monitoring of product conditions with IOT devices (sensors).
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            In this case a smart contract is created that outlines the procedure and the right parameters of time, temperature and humidity for its delivery. Additionally a rating system can be added to the contract further deepening the understanding of what is happening.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            This pizza restaurant will develop best practices and improve delivery conditions creating a network of pizzerias that provide extra quality in its delivery process.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            As the system tracks delivery and satisfaction through reviews from clients and incidents during transport they will be able to deliver better pizzas and be more competitive.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            The client will learn from reviews which pizzerias have this quality cross-check system.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            This could inspire new ways of specializing in smart delivery of food.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            Finally, the delivery person can track his own data and discover where he/she should be best geopositioned to receive more delivery requests.
                        </Typography>
                    </div>
                </div>
                {/* --------------------- Sexta seccion ----------------------*/}
                <div style={{ position: 'relative' }}>
                    <div className={classes.parallaxTransportation} style={{ height: '100%', width: '100%', zIndex: 1, position: 'absolute', }} />
                    <div style={{ height: '100%', display: 'flex', justifyContent: 'center', paddingTop: '5%', paddingBottom: '5%', alignItems: 'center', flexDirection: 'column', zIndex: 2, position: 'relative' }}>
                        <div className={classes.textSixthSection}>
                            <Typography variant='h5' paragraph align='center'>
                                <b style={{ color: 'white' }}>Monitoring ship containers</b>
                            </Typography>

                            <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                Problem: temperature can drop or rise inside a reefer container enough to damage its contents.
                            </Typography>
                            <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                Containers are being tracked with IOT devices and a bill of lading registers all the relevant information for shipping. The bill of lading will be transformed into a smart contract and the IOT device will monitor among others the temperature range acceptable for producer, carrier and buyer. Real time tracking enables to make decisions on the go avoiding in this case great potential losses. The contract will make further possible the following:
                            </Typography>
                            <div style={{ columnCount: 2, marginBottom: 10 }}>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    1.	Tracking which carrier is moving the container.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    2.	Tracking where the container is located globally.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    3.	Tracking if the environment conditions inside the container are the correct ones.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    4.	Tracking if a container is being open, shaken or altered in some way.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    5.	Tracking if the geo-positioning correspond with the timetable of location.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    6.	Tracking if the container needs to be brought to a different harbor due to accelerated ripening of fruit.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    7.	Arrange an automatic payment at arrival or arrange an automatic demurrage fine in case of delay.
                            </Typography>
                                <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                    8.	Make possible a paperless documentation handover.
                            </Typography>
                            </div>
                            <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                Let’s assume that a supermarket starts tracking its avocados and thus ensures better business results avoiding potential losses because of temperature variations. The supermarket decides then to start to import bananas. A new contract will be created based on the original success formula, extending potential gains to this new product. From here a new hub of information and knowledge can be acquired and immediately be put into practice in a decentralized network.
                            </Typography>
                            <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                                Just as centralized companies accumulate knowledge to gain advantage from competitors, each smart contract that is properly functioning and making money will be accumulating valuable know how. The hubs or clusters of businesses that have the correct variables working, will succeed and be more competitive providing more traffic and more money exchange.
                            </Typography>
                        </div>
                    </div>
                </div>

                <div className={classes.containers} style={{ paddingTop: '4%', paddingBottom: '3%', }}>
                    <div className={classes.textFifthSection}>
                        <div style={{ textAlign: 'center' }}>
                            <Typography variant='h5' paragraph>
                                <b>Monitoring temperature at work</b>
                            </Typography>
                        </div>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            We want to track and control temperature in our working environment improving in order to improve the office workplace environment and facilitating maintenance and or repair of equipment.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            Who participates in this network and what can it do for them?:
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            1. The landlord renting out office space. He or she will notice that the offices are using more electricity than contractually agreed, enabling him/her to automatically charge according to the increase in consumption.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            2.	The tenant looking for state of the art office space will be able to change the temperature and humidity by means of his or smart phone.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            3.	The companies maintaining and servicing equipment such as, heating, air conditioning, fire alarm systems etc. will receive real time notification when to repair a cooling unit, humidifier, alarm systems etc.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            Paradigma CrossCheck will enable the verification of environment parameters and automatically send a notification to all involved. When the air-conditioning temperature parameters are back to normal within an agreed timeframe, the Crosscheck system will automatically ensure payment to the company for its repair. This tracking of temperature as such is not new. What is new is that this will happen in a secure decentralized paperless manner, arranging on time maintenance and repair, facilitated by an automatic payment system and certification of events.
                        </Typography>
                        <Typography variant='subtitle1' color='inherit' style={{ lineHeight: '1.5em' }} paragraph>
                            Paradigma CrossCheck is a platform for different business networks such as described above, with the extra benefit that each can be implemented with its own characteristics. Similarly to the pizza network, this cluster can be developed in any direction the market needs, altering the variables and their ranges.
                        </Typography>
                    </div>
                </div>

                <div style={{ position: 'relative', height: '90vh' }} className={classes.containers}>
                    <div className={classes.parallaxBlockchain} style={{ zIndex: 1, position: 'absolute', }} />
                    <div className={classes.finalMessage} style={{ zIndex: 2, position: 'relative' }}>
                        <Typography variant='h3' paragraph align='center'>
                            <b>Final comments</b>
                        </Typography>
                        <br />
                        <Typography variant='h5' color='inherit'>
                            <b>
                                We sincerely believe that the underlying blockchain technology together with Blockstack will be a powerful way forward and Paradigma CrossCheck is committed to create the best experience possible in discovering new ways for successful businesses in a decentralized economy.
                            </b>
                        </Typography>
                    </div>
                </div>
            </div >
        );
    }
}

const styles = theme => ({
    containers: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

        width: '100vw' - 10,

        color: '#37383d',
        fontWeight: 500,
        ['@media all and (orientation:portrait)']: {
            flexDirection: 'column',
        }
    },

    // ---------------------- primera seccion ----------------------
    textFirstSection: {
        fontSize: '1em',
        textAlign: 'justify',
        textJustity: 'inter-word',
        width: '50%',
        maxHeight: '60%',
        transition: 'all .3s',
        ['@media (max-width:1210px)']: {
            transition: 'all .3s',
            fontSize: '0.95em',
        },

        ['@media (max-width:1010px)']: {
            transition: 'all .3s',
            fontSize: '0.92em',
        },
        ['@media (max-width:1010px)']: {
            transition: 'all .3s',
            fontSize: '0.92em',
        },
        ['@media (max-width:980px)']: {
            transition: 'all .3s',
            fontSize: '0.9em',
            marginLeft: 20,
        },
        ['@media (max-width:950px)']: {
            transition: 'all .3s',
            fontSize: '0.87em',
        },
        ['@media (max-width:933px)']: {
            transition: 'all .3s',
            fontSize: '0.82em',
        },
        // cambio de justificacion
        ['@media (max-width:850px)']: {
            transition: 'all .3s',
            fontSize: '0.82em',
            textAlign: 'left',
            textJustity: '',
        },
        ['@media (max-width:765px)']: {
            fontSize: '0.75em',
            transition: 'all .3s',
        },
        ['@media (max-width:720px)']: {
            fontSize: '0.70em',
            transition: 'all .3s',
        },
        ['@media all and (orientation:portrait)']: {
            marginLeft: 0,
            fontSize: '0.81em',
            textAlign: 'justify',
            textJustity: 'inter-word',
            width: '90%',
            // height: '40%'
            ['@media (min-height:800px)']: {
                transition: 'all .7s',
                marginBottom: 30,
            },
        }
    },
    crosschekImage: {
        height: 380,
        width: 380,
        // outline: '1px dashed red',
        ['@media all and (orientation:portrait)']: {
            width: '52%',
            height: '40%',
            transition: 'all 1s',
            ['@media (max-width:720px)']: {
                transition: 'all 1s',
                height: 250,
                width: 250,
            }
        }
    },

    // ---------------------- segunda y cuarta seccion ----------------------
    containerSecondSection: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',

        width: '100vw' - 10,

        color: '#37383d',
        fontWeight: 500,
        ['@media all and (orientation:portrait)']: {
            flexDirection: 'column-reverse',
        }
    },
    textSecondSection: {
        fontSize: '1em',
        textAlign: 'justify',
        textJustity: 'inter-word',
        width: '50%',
        // maxHeight: '60%',
        transition: 'all .3s',
        ['@media (max-width:1210px)']: {
            transition: 'all .3s',
            fontSize: '0.95em',
        },

        ['@media (max-width:1010px)']: {
            transition: 'all .3s',
            fontSize: '0.92em',
        },
        ['@media (max-width:1010px)']: {
            transition: 'all .3s',
            fontSize: '0.92em',
        },
        ['@media (max-width:980px)']: {
            transition: 'all .3s',
            fontSize: '0.9em',
            marginLeft: 20,
        },
        ['@media (max-width:950px)']: {
            transition: 'all .3s',
            fontSize: '0.87em',
        },
        ['@media (max-width:933px)']: {
            transition: 'all .3s',
            fontSize: '0.82em',
        },
        // cambio de justificacion
        ['@media (max-width:850px)']: {
            transition: 'all .3s',
            fontSize: '0.82em',
            textAlign: 'left',
            textJustity: '',
        },
        ['@media (max-width:765px)']: {
            fontSize: '0.75em',
            transition: 'all .3s',
        },
        ['@media (max-width:720px)']: {
            fontSize: '0.70em',
            transition: 'all .3s',
        },
        ['@media all and (orientation:portrait)']: {
            marginLeft: 0,
            fontSize: '0.81em',
            textAlign: 'justify',
            textJustity: 'inter-word',
            width: '90%',
            // height: '40%'
            ['@media (min-height:800px)']: {
                transition: 'all .7s',
                // marginBottom: 30,
            },
        },
    },
    blockchainTinyImage: {
        // height: 260,
        width: 380,
        marginTop: 40,
        // outline: '1px dashed red',
        ['@media all and (orientation:portrait)']: {
            marginTop: 20,
            width: '82%',
            // height: '40%',
            transition: 'all 1s',
            ['@media (max-width:720px)']: {
                transition: 'all 1s',
                // height: 250,
                width: '90%',
            }
        }
    },
    contractImage: {
        // height: 220,
        width: 380,
        marginTop: 40,
        // outline: '1px dashed red',
        ['@media all and (orientation:portrait)']: {
            marginTop: 20,
            width: '82%',
            // height: '30%',
            transition: 'all 1s',
            ['@media (max-width:720px)']: {
                transition: 'all 1s',
                // height: 200,
                width: '90%',
            }
        }
    },
    // ---------------------- tercera seccion ----------------------
    textThirdSection: {
        width: '70%', textShadow: '1px 1px #000',
        textAlign: 'justify', textJustify: 'inter-word',
        ['@media (max-width:1210px)']: {
            width: '76%',
        },
        ['@media (max-width:1010px)']: {
            width: '82%',
        },
        ['@media (max-width:1010px)']: {
            width: '90%',
        },
    },
    // ---------------------- Quinta seccion ----------------------
    textFifthSection: {
        width: '83%',
        textAlign: 'justify', textJustify: 'inter-word',
        ['@media (max-width:1210px)']: {
            width: '83%',
        },
        ['@media (max-width:1010px)']: {
            width: '86%',
        },
        ['@media (max-width:1010px)']: {
            width: '90%',
        },
    },
    // ---------------------- Quinta seccion ----------------------
    textSixthSection: {
        width: '80%', textShadow: '1px 1px #000',
        textAlign: 'justify', textJustify: 'inter-word',
        ['@media (max-width:1210px)']: {
            width: '83%',
        },
        ['@media (max-width:1010px)']: {
            width: '86%',
        },
        ['@media (max-width:1010px)']: {
            width: '90%',
        },
    },
    finalMessage: {
        // height: '100%',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textShadow: '1px 1px #000',
        textAlign: 'justify', textJustify: 'inter-word',
        width: '70%',
        ['@media (max-width:1210px)']: {
            width: '76%',
        },
        ['@media (max-width:1010px)']: {
            width: '82%',
        },
        ['@media (max-width:1010px)']: {
            width: '90%',
        },
        transition: 'all .3s',
    },
    parallaxTransportation: {
        backgroundImage: `url(${transportationIMG})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'grayscale(20%) saturate(0.7) brightness(40%)',
        height: '100%', width: '100%',
    },
    parallaxBlockchain: {
        backgroundImage: `url(${blockchainBackgroundIMG})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'grayscale(20%) saturate(0.8) brightness(45%)',
        height: '100%', width: '100%',
    },
    parallaxLinkedWorld: {
        backgroundImage: `url(${linkedWorldIMG})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        filter: 'grayscale(20%) saturate(0.8) brightness(45%)',
        height: '100%', width: '100%',
    },
});

export default withStyles(styles, { withTheme: true })(WhyScreen);