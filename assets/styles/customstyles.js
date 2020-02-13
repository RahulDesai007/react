/*anything to be set and could be commonly used in all files*/
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import colors from '../../src/utils/colors';

const { turquoise,
        white,
        black, 
        emerald,
        clouds
     } = colors;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    wrapper: {
        backgroundColor: white,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
    },

    titleWrapper: {
        justifyContent: 'center',
        flex: 1
    },

    title: {
        color: black,
        fontSize: 30,
        marginLeft: 30,
        fontWeight: 'bold',
    },

    subtitle: {
        color: black,
        fontWeight: 'normal'
    },

    subtitleWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },

    splashscreenLoading: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
    },

    splashscreenLoadingWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },

    loginscreenContainer: {
        flex: 1,
        backgroundColor: white
    },

    loginscreenLogoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    homescreenLogo: {
        flexGrow: 1,
        alignItems: 'center',
        height: -15,
        width: 700,
        justifyContent: 'flex-start'
    },

    loginscreenLogo: {
        width: 400,
        height: 200
    },

    loginTitle: {
        color: black,
        textAlign: 'center',
        fontSize: 20,
        opacity: 0.9,
        marginTop: 10,
        width: 250
    },

    loginscreenInputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
        paddingHorizontal: 8,
       flex: 5,
      flexDirection: 'column',
      justifyContent: 'flex-start'
    },

    loginscreenLoginContainer: {
        paddingTop: 20
    },

    loginscreenLoginContainer1: {
        paddingTop: 20,
        paddingLeft: 130,
        height: 500,
        width: 300
        
    },

    loginscreenCreateAccountContainer: {
        flex: 1
    },

    loginscreenCreateAccountWrapper: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 20,
    },

    loginscreenCreateAccountText: {
        color: black
    },

    loginscreenCreateAccountLinkText: {
        color: black,
        marginLeft: 5,
    }
});