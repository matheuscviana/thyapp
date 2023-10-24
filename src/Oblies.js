import './Oblies.css';
import oblies from './oblies.json';

export default function Obligations() {
  return (
    <>
      {oblies.map(o => <Obli content={o} />)}
    </>
  );
}

function Obli({ content }) {

  function statusColor() {
    if (content.status == 'Scheduled')
      return 'style="color:lightgreen;"';
    else '';
  }

  return (
    <div className='Obligation'>
      <div className='ObliHead'>
        <span>{content.id} - {content.title}</span>
        <span>Creation Date: {content.dateStart}</span>
        <span>Starting Date: {content.dateStart}</span>
        <span>Ending Date: {content.dateStart}</span>
        <span>Status: {content.status}</span>
        <span>Related to: {content.correlation}</span>
      </div>
      <p className='ObliDes'><b>Description:</b> {content.description}</p>
      <p className='ObliObs'><b>Observations:</b> {content.observations}</p>
    </div>
  );
}

