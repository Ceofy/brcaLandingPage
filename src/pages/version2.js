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

import './pageStyles/index.module.css';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout backgroundColor={contrastBackgroundColor}>
    <SEO title='The Protein Interaction Landscape of Breast Cancer' />
    <TopPanel>
      <HorizontalTitle
        title={
          <>
            <span style={{ display: 'inline-block' }}>
              The Protein Interaction Landscape
            </span>
            <span style={{ display: 'inline-block' }}>of Breast Cancer</span>
          </>
        }
        subtitle={
          <span style={{ display: 'inline-block' }}>
            View in{' '}
            <a href='#ndex'>
              <img
                src={ndexLogo}
                alt='NDEx Logo'
                style={{
                  height: '1.249em',
                  marginBottom: '0',
                  position: 'relative',
                  top: '0.3em',
                }}
              />
            </a>
            :
          </span>
        }
      />
      <HorizontalButtonsContainer>
        <ButtonLink
          text='Breast cancer network'
          link='http://ndexbio.org/?#/network/e89ad762-ab4b-11ea-aaef-0ac135e8bacf'
          vertical={false}
        />
        <ButtonLink
          text='BRCA1 interactome'
          link='http://ndexbio.org/?#/network/34eec19d-ab5a-11ea-aaef-0ac135e8bacf'
          vertical={false}
        />
        <ButtonLink
          text='MCF7 and MDA-MB-231 shared network'
          link='http://ndexbio.org/?#/network/e89ad762-ab4b-11ea-aaef-0ac135e8bacf'
          vertical={false}
        />
      </HorizontalButtonsContainer>
    </TopPanel>

    <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>
      <h2>The protein interaction landscape of breast cancer</h2>
      <p>
        Cancers have been associated with diverse sets of genomic alterations,
        many of which are rare with uncertain significance. To understand the
        cellular mechanisms impacted by such alterations in breast invasive
        carcinoma, we have applied affinity-purification mass spectrometry to
        delineate comprehensive biophysical interaction networks for 40
        frequently altered breast cancer proteins. These networks interconnect
        and enrich for common and rare cancer mutations; they are also
        substantially re-wired by mutations, including in TP53 and PIK3CA, and
        across cancerous and non-cancerous cell contexts. Our analysis
        identifies a novel AKT-interacting protein, S100A3, which we find
        activates AKT signaling and is predictive of clinical response to AKT
        inhibitors. Similarly, UBE2N emerges as a BRCA1 interactor predictive of
        clinical response to inhibition of PARP. Finally, we show that
        Spinophilin interacts with and dephosphorylates BRCA1 to promote DNA
        double strand break repair. Thus, cancer protein interaction landscapes
        provide a framework for recognizing oncogenic drivers and drug
        vulnerabilities.
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
