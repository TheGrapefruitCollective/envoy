/**
 * Copyright (c) TheGrapefruitCollective
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { View, ScrollView, Text } from 'react-native';
import { TextBold } from '../../../components/Text';
import styles from './styles';

function PrivacyPolicy() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TextBold title='Privacy Policy' />
        <Text style={styles.sections}>
          Envoy is an Open Source application. This SERVICE is provided by The
          Grapefruit Collective at no cost and is intended for use as is. This
          page is used to inform visitors regarding our policies with the
          collection, use, and disclosure of Personal Information if anyone
          decided to use our Service. If you choose to use our Service, then you
          agree to the collection and use of information in relation to this
          policy. The Personal Information that we collect is used for providing
          and improving the Service. We will not use or share your information
          with anyone except as described in this Privacy Policy.
        </Text>
        <TextBold title='Information Collection and Use' />
        <Text style={styles.sections}>
          For a better experience, while using our Service, we may require you
          to provide us with certain personally identifiable information,
          including but not limited to full name, email address, college
          department. The information that we request will be retained by us and
          used as described in this privacy policy. The app does use third-party
          services that may collect information used to identify you. Link to
          the privacy policy of third-party service providers used by the app:
          {'\n\n\u2022'} Google Analytics for Firebase
          {'\n\u2022'} Firebase Crashlytics
        </Text>
        <TextBold title='Log Data' />
        <Text style={styles.sections}>
          In a case of an error in the app we collect data and information
          (through third-party products) on your phone called Log Data. This Log
          Data may include information such as your device name, operating
          system version, the configuration of the app when utilizing our
          Service, the time and date of your use of the Service, and other
          statistics.
        </Text>
        <TextBold title='Links to Other Sites' />
        <Text style={styles.sections}>
          This Service contain links to other sites. If you click on a
          third-party link, you will be directed to that site. Note that these
          external sites are not operated by us. Therefore, we strongly advise
          you to review the Privacy Policy of these websites. We have no control
          over and assume no responsibility for the content, privacy policies,
          or practices of any third-party sites or services.
        </Text>
        <TextBold title='Changes to this Privacy Policy' />
        <Text style={styles.sections}>
          This SERVICE is provided by The Grapefruit Collective at no cost and
          We may update our Privacy Policy from time to time.
          {'\n\n'}
          This policy is effective as of 2022-11-24
        </Text>
        <TextBold title='Contact Us' />
        <Text style={styles.sections}>
          This SERVICE is provided by The Grapefruit Collective at no cost and
          If you have any questions or suggestions about our Privacy Policy, do
          not hesitate to Email us.
        </Text>
      </ScrollView>
    </View>
  );
}

export default PrivacyPolicy;
