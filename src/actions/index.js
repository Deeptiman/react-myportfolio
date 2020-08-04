import {FETCH_PORTFOLIO} from './constants';


export const fetchPortfolioListsCallback = data => ({
    type: FETCH_PORTFOLIO,
    payload: data,
})


export const fetchPortfolioLists = () => dispatch => {

    var projects = [
        {
            id: 1,
            name: 'React-Native TODO List Application',
            description: 'The react-native-todolist application is a cross-platform mobile application developed using the <a href="https://reactnative.dev/docs/getting-started" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">React-Native</a> framework with <a href="https://redux.js.org/introduction/getting-started" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">Redux</a> implementation. The application has features to create a calendar in both Google & Microsoft cloud platforms, users can also receive a push notification from the server based on topic subscription.',
            banner: require('../images/todolist_app.png'),           
            tools: ['Tool1', 'Tool2', 'Tool3'],
            github: 'https://github.com/Deeptiman/react-native-todolist',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/react-native-todolist",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/react-native-todolist",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/react-native-todolist",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/react-native-todolist?label=Fork&style=social",
            hasGithub: true,
            hasMedium: false,
            medium: '',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 2,
            name: 'Hyperledger Fabric - Single Organization Demo',
            description: 'The <a href="https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html" target="_blank" style="color: #000;text-decoration: none; margin-top: 4px; border-bottom: 2px solid black;">Blockchain</a> application written in <a href="https://golang.org/doc/" target="_blank" style="color: #000; margin-top: 4px;text-decoration: none;border-bottom: 2px solid black;">Go language</a> to demonstrate the <a href="https://hyperledger-fabric.readthedocs.io/" target="_blank" style="color: #000; margin-top: 4px; text-decoration: none;border-bottom: 2px solid black;">Hyperledger Fabric</a> Blockchain framework. The project repo has been designed to upload employee records into the blockchain and also has the functionality to update, delete the record stored securely in the Hyperledger framework.',
            banner: require('../images/hyperledger_single_org.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            github: 'https://github.com/Deeptiman/employeeledger',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/employeeledger",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/employeeledger",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/employeeledger",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/employeeledger?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/a-single-organization-application-in-hyperledger-fabric-146c351b04b7',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 3,
            name: 'Hyperledger Fabric - Multi Organization Demo',
            description: 'The <a href="https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html" target="_blank" style="color: #000;text-decoration: none; margin-top: 4px; border-bottom: 2px solid black;">Blockchain</a> network consists of four organization joined with a  single channel. The ledger data created in an organization can be accessible by the other participating organization in the network.',
            banner: require('../images/hyperledger_multi_org_banner.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            github: 'https://github.com/Deeptiman/multiorgledger',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/multiorgledger",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/multiorgledger",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/multiorgledger",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/multiorgledger?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/a-multi-organization-application-in-hyperledger-fabric-8612cef5bbae',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 4,
            name: 'Hyperledger Fabric - Privacy and Confidentiality',
            description: 'The <a href="https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html" target="_blank" style="color: #000;text-decoration: none; margin-top: 4px; border-bottom: 2px solid black;">Blockchain</a> application will store the records in a private network that the records will only be accessible to the parent organization unless the records are shared with other organization in the network. The project will demonstrate <a href="https://developer.ibm.com/technologies/blockchain/tutorials/cl-blockchain-private-confidential-transactions-hyperledger-fabric-zero-knowledge-proof" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">Privacy and Confidentiality</a> in Hyperledger Fabric.',
            banner: require('../images/hyperledger_private_org_banner.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            github: 'https://github.com/Deeptiman/privateledger',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/privateledger",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/privateledger",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/privateledger",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/privateledger?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/confidentiality-and-private-data-in-hyperledger-fabric-1279c8e2e57f',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 5,
            name: 'Hyperledger Fabric - Offchain Storage',
            description: 'The <a href="https://hyperledger-fabric.readthedocs.io/en/release-2.2/blockchain.html" target="_blank" style="color: #000;text-decoration: none; margin-top: 4px; border-bottom: 2px solid black;">Blockchain</a> application is a sample demonstration to understand the concept of implementing offchain storage and it\'s capability in Hyperledger fabric Blockchain network. So, this project will work as a peer block event listener and will store the block details in the <a href="https://docs.couchdb.org/en/stable/" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">CouchDB</a> that can be query through <a href="https://en.wikipedia.org/wiki/MapReduce" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">MapReduce</a>.',
            banner: require('../images/hyperledger_offchain_data_banner.png'),
            tools: ['Tool1', 'Tool2', 'Tool3'],
            github: 'https://github.com/Deeptiman/offchaindata',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/offchaindata",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/offchaindata",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/offchaindata",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/offchaindata?label=Fork&style=social",
            hasGithub: true,
            hasMedium: true,
            medium: 'https://medium.com/@deeptiman/offchain-storage-in-hyperledger-fabric-77e28bd99e0c',
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 6,
            name: 'Sur Sadhana',
            description: 'Sur Sadhana, it\'s a music app that a singer can analyse his/her singing skill. The app will give the Graphical representation of the voice with a scorecard to the singer.',
            banner: require('../images/sur_sadhana_banner.png'),
            tools: ['Tool1', 'Tool2'],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.shankarmahadevanacademy.sursadhana.swara'
        },
        {
            id: 7,
            name: 'Beat Station',
            description: 'BeatStation is a music app where people can listen to their favorite Genre online. The application is built with large storage of music mp3 files in the server that sync with the mobile application for the streaming of the music files.',
            banner: require('../images/beat_station.png'),
            tools: ['Tool1', 'Tool2'],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.mdotbuz'
        },
        {
            id: 8,
            name: 'PHP Dom Parser and Translation Tool',
            description: 'The web application is developed to demonstrate translation in live web pages by parsing through <a href="https://www.w3schools.com/whatis/whatis_htmldom.asp" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">HTML DOM</a> and extracting the text element and match them with an English to Odia dictionary that is stored in a local database. The complete parsing result will preview as a translated webpage for a website.',
            banner: require('../images/parser_tool.png'),
            tools: ['Tool1', 'Tool2'],
            github: 'https://github.com/Deeptiman/php-dom-parser-translation-tool',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/php-dom-parser-translation-tool",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/php-dom-parser-translation-tool",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/php-dom-parser-translation-tool",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/php-dom-parser-translation-tool?label=Fork&style=social",
            hasGithub: true,
            hasMedium: false,
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 9,
            name: 'Android Alphabet learning App',
            description: 'The application is an <a href="https://en.wikipedia.org/wiki/Odia_script" target="_blank" style="color: #000;text-decoration: none;border-bottom: 2px solid black;">Odia letter</a> learning app that be helpful for people to learn Odia letters writing. The app has a learning module that will help to learn and understand the exact writing of an Odia letter.',
            banner: require('../images/alphabet_app.png'),
            tools: ['Tool1', 'Tool2'],
            github: 'https://github.com/Deeptiman/Alphabet-Learning-Android-Application',
            github_badges_last_commit: "https://img.shields.io/github/last-commit/Deeptiman/Alphabet-Learning-Android-Application",
            github_badges_language_count: "https://img.shields.io/github/languages/count/Deeptiman/Alphabet-Learning-Android-Application",
            github_badges_top_language: "https://img.shields.io/github/languages/top/Deeptiman/Alphabet-Learning-Android-Application",
            github_badges_forks: "https://img.shields.io/github/forks/Deeptiman/Alphabet-Learning-Android-Application?label=Fork&style=social",
            hasGithub: true,
            hasMedium: false,
            hasPlaystore: false,
            playstore: ''
        },
        {
            id: 10,
            name: 'Online Examination App',
            description: 'The application is an examination platform where a student can give an assessment online. The teachers can set questions and time for the assessment from the mobile application.',
            banner: require('../images/fellowprap_banner.png'),
            tools: ['Tool1', 'Tool2'],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.mindtree.kefprap'
        },
        {
            id: 11,
            name: 'TODO List Planner App',
            description: 'In this application, the user can plan, schedule his/her daily activity. There is also a Calendar feature where the user can view their planned activity status with different distinct colors.',
            banner: require('../images/fellowregister_banner.png'),
            tools: ['Tool1', 'Tool2'],
            github: '',
            hasGithub: false,
            hasMedium: false,
            hasPlaystore: true,
            playstore: 'https://play.google.com/store/apps/details?id=com.mindtree.keffellowregister'
        }
    ]

    dispatch(fetchPortfolioListsCallback(projects))
};