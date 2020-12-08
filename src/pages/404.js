import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '@common/Layout';
import { Section, Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Section id="about">
      <Container style={{ position: 'relative' }}>
        <div>
          <h2 style={{ margin: '0 0 1rem 0' }}>Page Not Found</h2>
          <p>
            You've reached a page that doesn&#39;t exist, sorry!{' '}
            <StyledLink to="/">Click here to go back home.</StyledLink>
          </p>
        </div>
      </Container>
    </Section>
  </Layout>
);

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: underline;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default NotFoundPage;
