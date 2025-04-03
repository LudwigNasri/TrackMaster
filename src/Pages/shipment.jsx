import React from 'react'
import  { registerLicense } from '@syncfusion/ej2-base'
import { ColumnDirective, GridComponent, ColumnsDirective, queryCellInfo, Column, Inject, Page } from '@syncfusion/ej2-react-grids'
import DummyData from '../data/dummy'
import PageHead from '../components/admin/PageHead'
import { getValue } from '@syncfusion/ej2-base'


registerLicense("Ngo9BigBOggjHTQxAR8/V1NNaF5cXmBCekx3Qnxbf1x1ZFJMY1VbRn9PMyBoS35Rc0VgWn9edXZcQmlUUUVwVEBU")

function Shipment() {

  const query = (args) => {
    // Ensure the column being processed is 'trackingInfo.status'
    if (args.column.field === 'trackingInfo.status') {
      const status = getValue('trackingInfo.status', args.data);
  
      // Remove any previously added class to prevent duplication
      args.cell.classList.remove('delivered', 'pending', 'in-transit');
  
      if (status === 'Delivered') {
        args.cell.classList.add('delivered'); // Green for Delivered
      } else if (status === 'Pending') {
        args.cell.classList.add('pending'); // Yellow for Pending
      } else if (status.includes("Transit")) {
        args.cell.classList.add('in-transit'); // Blue for In Transit
      }
    }
  };
  


  return (
    <div className='shipmentt'>
        <PageHead title='Page' subtitle='Shipment'/>
      <GridComponent 
      dataSource={DummyData}
      queryCellInfo={query}
      rowHeight={55}
      allowPaging
       >
        <ColumnsDirective>
          <ColumnDirective field='userId' textAlign='center' />
          <ColumnDirective field='name'  textAlign='left'  />
          <ColumnDirective field='email'  textAlign='left' />
          <ColumnDirective field='phone'  textAlign='left'  />
          <ColumnDirective field='address.city'  textAlign='left'  />
          <ColumnDirective field='trackingInfo.trackingNumber'  headerText='Tracking Number' textAlign='left'  />
          <ColumnDirective field='trackingInfo.status' headerText='Status'  textAlign='center'  />


        </ColumnsDirective>

        <Inject services={[Page]} /> 
      </GridComponent>
    </div>
  )
}
 
export default Shipment