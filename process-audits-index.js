import editJsonFile from 'edit-json-file';

const auditfile = editJsonFile('./src/audits.json');

const audits = auditfile.get('audits');

const auditsindex = editJsonFile('./src/auditsindex.json');

const auditsindextosave = audits.map((audit) => {
  delete audit['textofpage'];
  delete audit['pdflink'];
  delete audit['htmlofpage'];

  return audit;
});

auditsindex.set('audits', auditsindextosave);
auditsindex.save();
