import React from 'react';
import SearchResult from './SearchResult';

export default {
  title: 'FRK/SearchResult',
  component: SearchResult,
};

const Template = (args) => <SearchResult {...args} />;

export const Default = Template.bind({});
Default.args = {};
