const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({ margin: 50 });
const outputPath = path.join(__dirname, 'public', 'gatri_reddy_resume.pdf');

doc.pipe(fs.createWriteStream(outputPath));

// Title
doc.fontSize(20).font('Helvetica-Bold').text('GATRI REDDY', { align: 'center' });
doc.fontSize(11).font('Helvetica').text('+91 78932 50885  |  gatrireddy@gmail.com  |  linkedin.com/in/gatrireddy  |  github.com/gatrireddy', { align: 'center' });

// Education
doc.fontSize(14).font('Helvetica-Bold').text('EDUCATION', { underline: true });
doc.fontSize(11).font('Helvetica-Bold').text('Mahindra University');
doc.fontSize(10).font('Helvetica').text('B.Tech in Artificial Intelligence | CGPA: 7.04 | Aug 2023 – Jun 2027');
doc.text('Hyderabad, IN\n');

doc.fontSize(11).font('Helvetica-Bold').text('Page College');
doc.fontSize(10).font('Helvetica').text('Intermediate (TSBIE) | 92% | Jun 2021 – May 2023');
doc.text('Hyderabad, IN\n');

// Experience
doc.fontSize(14).font('Helvetica-Bold').text('EXPERIENCE', { underline: true });
doc.fontSize(11).font('Helvetica-Bold').text('Marketing & Social Media Head — Blockchain Club, Mahindra University');
doc.fontSize(10).font('Helvetica').text('Jan 2025 – Present');
doc.fontSize(9).text('• Coordinating outreach and digital strategy for blockchain-focused initiatives');
doc.text('• Participated in technical workshops by Aleph Zero, Hyderabad DAO, and Pyor\n');

// Projects
doc.fontSize(14).font('Helvetica-Bold').text('PROJECTS', { underline: true });

const projects = [
  { name: 'RESCORE — AI-Powered Resume Analyzer', tech: 'React, Node.js, OpenAI API, CSS', date: 'Feb 2026' },
  { name: 'Dishly — Recipe Search Web Application', tech: 'React.js, Axios, Material-UI, REST API', date: 'Nov 2025' },
  { name: 'Legal & Medical Document Summarization', tech: 'Python, T5, LoRA, HuggingFace', date: 'Oct 2025' },
  { name: 'HR Attrition & Salary Prediction — SalaryInsight', tech: 'Python, Scikit-learn, XGBoost', date: 'May 2025' }
];

projects.forEach(proj => {
  doc.fontSize(11).font('Helvetica-Bold').text(`${proj.name} | ${proj.tech} | ${proj.date}`);
  doc.fontSize(9).font('Helvetica').text('');
});

// Skills
doc.fontSize(14).font('Helvetica-Bold').text('TECHNICAL SKILLS', { underline: true });
doc.fontSize(10).font('Helvetica').text('Languages: Python, JavaScript, Java, C, C#, SQL, HTML, CSS');
doc.text('AI/ML: NLP, LLMs, Fine-tuning (LoRA), XGBoost, Random Forest, Scikit-learn, HuggingFace Transformers');
doc.text('Frameworks: React.js, Node.js, Axios, Material-UI, Pandas, NumPy, Matplotlib');
doc.text('Tools: Git, GitHub, Jupyter Notebook, Google Colab, VS Code, REST APIs');

// Achievements
doc.fontSize(14).font('Helvetica-Bold').text('ACHIEVEMENTS', { underline: true });
doc.fontSize(9).font('Helvetica').text('• Winner — Web3 Buidlathon');
doc.text('• MU Capture The Flag — Top 10 (5th Bridge, 2025)');
doc.text('• AI Student of the Year Participant — AI Hub & Google Gemini Hackathon');
doc.text('• Shell Shock 2025 — Cybersecurity Hackathon Participant');
doc.text('• Google ML Crash Course');

doc.end();
console.log('PDF created:', outputPath);
