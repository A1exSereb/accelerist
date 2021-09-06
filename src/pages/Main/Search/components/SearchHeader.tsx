/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';
import { getSearchCompaniesMeta } from 'store/ducks/companies/selectors';
import styled from 'styled-components';
import mailIcon from 'assets/images/icons/search/mail.svg';
import saveListIcon from 'assets/images/icons/search/folder-plus.svg';
import uploadIcon from 'assets/images/icons/search/upload.svg';
import IconSignature from 'ui/IconSignature/IconSignature';
import SearchPaginationSwitcher from './SearchPaginationSwitcher';
import { getSearchedCompaniesThunk } from 'store/ducks/companies/thunk';

interface SearchHeaderProps {
  limit: number;
  showSupportModal: Function;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({
  limit,
  showSupportModal,
}: SearchHeaderProps) => {
  const searchMeta = useSelector(getSearchCompaniesMeta);
  return (
    <HeaderContainer>
      <HeaderText>{`Found ${searchMeta.totalItems} companies`}</HeaderText>
      <Container>
        <SignatureContainer>
          <IconSignature iconSource={saveListIcon} label="Save List" />
          <IconSignature iconSource={uploadIcon} label="Export to Excel" />
          <IconSignature
            iconSource={mailIcon}
            onClick={showSupportModal}
            label="Accelerist Support"
          />
        </SignatureContainer>
        <SearchPaginationSwitcher
          asyncAction={getSearchedCompaniesThunk}
          limit={limit}
          meta={searchMeta}
        />
      </Container>
    </HeaderContainer>
  );
};

export default SearchHeader;

const HeaderContainer = styled.div`
  text-align: left;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const HeaderText = styled.p`
  color: #122434;
  font-size: 16px;
  margin: 0;
  font-weight: 500;
`;

const SignatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
