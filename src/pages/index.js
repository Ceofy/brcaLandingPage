import React from 'react';

import SEO from '../components/seo';
import Panel from '../components/panel';
import LinkOut from '../components/LinkOut';
import Layout from '../components/layout';
import TopPanel from '../components/topPanel';
import ButtonLink from '../components/buttonLink';

import HorizontalTitle from '../components/horizontalTitle';
import HorizontalButtonsContainer from '../components/horizontalButtonsContainer';

import ndexLogo from '../images/ndex.png';
import ndexLogoUnderline from '../images/ndexLogoUnderline.png';

import styles from './pageStyles/index.module.css';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout backgroundColor={contrastBackgroundColor}>
    <SEO title='The protein interaction landscape of breast cancer' />
    <TopPanel>
      <HorizontalTitle
        title={
          <>
            <span style={{ display: 'inline-block' }}>
              The Protein Interaction Landscape{' '}
            </span>
            <span style={{ display: 'inline-block' }}>of Breast Cancer</span>
          </>
        }
        subtitle={
          <span style={{ display: 'inline-block' }}>
            View in <a href='#ndex' />
            <a href='#ndex'>
              <div className={styles.ndexLogo}>
                <img src={ndexLogo} className={styles.noUnderlineLogo} />
                <img src={ndexLogoUnderline} className={styles.underlineLogo} />
              </div>
            </a>
            :
          </span>
        }
      />
      <HorizontalButtonsContainer>
        <ButtonLink
          text='Breast cancer network'
          link='https://www.ndexbio.org/viewer/networks/e89ad762-ab4b-11ea-aaef-0ac135e8bacf'
          vertical={false}
        />
        <ButtonLink
          text='BRCA1 interactome'
          link='https://www.ndexbio.org/viewer/networks/34eec19d-ab5a-11ea-aaef-0ac135e8bacf'
          vertical={false}
        />
        <ButtonLink
          text='MCF7 & MDA-MB-231 shared network'
          link='https://www.ndexbio.org/viewer/networks/bd4c9c05-ab4c-11ea-aaef-0ac135e8bacf'
          vertical={false}
        />
      </HorizontalButtonsContainer>
    </TopPanel>

    <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>
      <h2>Abstract</h2>
      <p>
        Cancers have been associated with a diverse array of genomic
        alterations. To help mechanistically understand such alterations in
        breast invasive carcinoma, we have applied affinity-purification mass
        spectrometry to delineate comprehensive biophysical interaction networks
        for 40 frequently altered breast cancer (BC) proteins, with and without
        relevant mutations, across three human breast cell lines. These networks
        identify cancer-specific protein-protein interactions (PPIs),
        interconnect and enrich for common and rare cancer mutations, and are
        substantially rewired by the introduction of key BC mutations. Our
        analysis identified PIK3CA-interacting proteins which repress AKT
        signaling and has uncovered USP28 and UBE2N as functionally relevant
        interactors of BRCA1. We also show that the PP1 phosphatase regulatory
        subunit, Spinophilin, interacts with and regulates dephosphorylation of
        BRCA1 to promote DNA double-strand break repair. Thus, PPI landscapes
        provide a powerful framework for mechanistically interpreting disease
        genomic data and can identify valuable new therapeutic targets.
      </p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <a id='ndex'>
        <h2>What is NDEx?</h2>
      </a>
      <p>
        {'NDEx, the Network Data Exchange ('}
        <LinkOut link='http://ndexbio.org'>www.ndexbio.org</LinkOut>
        {', Pratt et. al. 2017 '}
        <LinkOut link='https://dx.doi.org/10.1158/0008-5472.CAN-17-0606'>
          DOI: 10.1158/0008-5472.CAN-17-0606
        </LinkOut>
        {
          '), is an online commons for biological networks where networks of many types and formats can be shared, accessed, and stored by users and applications. NDEx is tightly integrated with Cytoscape ('
        }
        <LinkOut link='https://cytoscape.org/'>https://cytoscape.org/</LinkOut>
        {
          '), and networks can be downloaded to Cytoscape by clicking the “Open in Cytoscape” button at the bottom-right of the web page.'
        }
      </p>
    </Panel>
  </Layout>
);

export default IndexPage;
