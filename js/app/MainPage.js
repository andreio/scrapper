import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import PageHeader from 'react-bootstrap/lib/PageHeader';

export default ({ children })=> <div className="app ">
    <PageHeader>Scrapper</PageHeader>
    <Row>{children}</Row>
</div>;
