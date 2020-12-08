import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import { Section, Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Donate = () => (
  <StaticQuery
    query={graphql`
      query {
        art_donateqr: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "donateqr" }
        ) {
          childImageSharp {
            fluid(maxWidth: 120) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="donate" accent>
        <Container style={{ position: 'relative' }}>
          <Grid>
            <div>
              <h2 style={{ margin: '0 0 1rem 0' }}>
                Donate now to <br />
                support Marfa Schools.
              </h2>
              <p style={{ margin: '0 0 2rem 0' }}>
                <StyledExternalLink
                  href="https://www.paypal.com/donate?hosted_button_id=H3U77VW7ATGEN"
                  target="_blank"
                >
                  Donate online via Paypal &nbsp;&#x2794;
                </StyledExternalLink>
                <br />
                <br />
                <center>
                  <form
                    action="https://www.paypal.com/donate"
                    method="post"
                    target="_blank"
                  >
                    <input
                      type="hidden"
                      name="hosted_button_id"
                      value="H3U77VW7ATGEN"
                    />
                    <input
                      type="image"
                      src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                      border="0"
                      name="submit"
                      title="PayPal - The safer, easier way to pay online!"
                      alt="Donate with PayPal button"
                    />
                    <img
                      alt=""
                      border="0"
                      src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                      width="1"
                      height="1"
                    />
                  </form>
                </center>
              </p>
            </div>
            <div>
              <h2 style={{ margin: '0 0 1rem 0' }}>Or donate by check:</h2>
              <p>
                <div style={{ margin: '0 0 1rem 0' }}>
                  Make checks payable to:
                </div>

                <div
                  style={{
                    margin: '0 0 0 0rem',
                    padding: '1rem 1rem 1rem 1rem',
                    background: '#f6f6f6',
                  }}
                >
                  Marfa I.S.D. PTO
                  <br />
                  PO Box T
                  <br />
                  Marfa, TX 79843
                </div>
              </p>
            </div>
          </Grid>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  text-align: left;
  align-items: top;
  justify-items: left;
  margin: 24px 0;

  ${props =>
    props.check &&
    `
  text-align: left;
  grid-template-columns: 1fr 4fr 1fr;
`}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
      ${Art} {
        order: 2;
      }
  `}
  }
`;

const Art = styled.figure`
  width: 120px;
  position: relative;
  top: -12%;
  left: 25%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 0;
    right: 65%;
    width: 120px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Donate;
