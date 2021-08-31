import React, { useMemo } from 'react';

import LinkedInIcon from 'assets/images/icons/social-media/linkedin.svg';
import TwitterIcon from 'assets/images/icons/social-media/twitter.svg';
import FacebookIcon from 'assets/images/icons/social-media/fb.svg';
import { SOCIAL_MEDIA } from 'constants/socialMediaTypes';
import { SocialMedia } from 'types';
import styled from 'styled-components';

export interface CompanySocialMediaLinksProps {
  urls: SocialMedia[];
}

const CompanySocialMediaLinks: React.FC<CompanySocialMediaLinksProps> = ({
  urls,
}: CompanySocialMediaLinksProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case SOCIAL_MEDIA.LINKED_IN:
        return LinkedInIcon;
      case SOCIAL_MEDIA.FACEBOOK:
        return FacebookIcon;
      case SOCIAL_MEDIA.TWITTER:
        return TwitterIcon;
      default:
    }
  };

  const filterUrls = useMemo(
    () =>
      urls.filter(
        ({ type }) =>
          type === SOCIAL_MEDIA.LINKED_IN ||
          type === SOCIAL_MEDIA.FACEBOOK ||
          type === SOCIAL_MEDIA.TWITTER
      ),
    [urls]
  );

  return (
    <Wrapper>
      {filterUrls.map(({ type, url }: SocialMedia) => {
        const icon = getIcon(type);
        return (
          <a key={url} href={url}>
            <img src={icon} />
          </a>
        );
      })}
    </Wrapper>
  );
};

export default CompanySocialMediaLinks;

const Wrapper = styled.div`
  display: flex;
`;
