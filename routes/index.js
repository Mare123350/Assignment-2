var express = require('express');
var router = express.Router();


const site = {
  title: 'Mare Okoigun — Portfolio',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ],
  socials: [
    { href: 'https://github.com/Mare123350', icon: 'fab fa-github', label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/mare-okoigun-957330263', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  ],
};



const projects = [
  {
    title: 'AWS Secure VPC & 3-Tier Web App',
    stack: ['AWS VPC','ALB','Auto Scaling','Security Groups','IAM'],
    link: 'https://github.com/Mare123350',
    desc: 'Designed a segmented VPC (public/private) with ALB and bastion host; locked down traffic using least-privilege SGs and NACLs.',
    image: '/images/aws-vpc.png'
  },
  {
    title: 'Campus Network (Cisco Packet Tracer)',
    stack: ['Routing','VLANs','STP','Inter-VLAN','DHCP','NAT'],
    link: 'https://github.com/Mare123350',
    desc: 'Built a multi-VLAN campus topology with inter-VLAN routing, redundancy, and NAT for WAN access.',
    image: '/images/packet-tracer.png'
  },
  {
    title: 'Suricata IDS/IPS Lab',
    stack: ['Suricata','PCAP','Rules','Dashboards'],
    link: 'https://github.com/Mare123350',
    desc: 'Deployed Suricata, authored rules for common threats, and validated detections against replayed traffic.',
    image: '/images/suricata.png'
  },
  {
    title: 'Linux Hardening with Ansible',
    stack: ['Ansible','CIS Benchmarks','Systemd','Auditd'],
    link: 'https://github.com/Mare123350',
    desc: 'Automated baseline hardening: user/account policies, SSH lockdown, logging/audit, and firewall controls.',
    image: '/images/ansible.png'
  },
  {
    title: 'OWASP Juice Shop Write-up',
    stack: ['OWASP Top 10','Burp Suite','Recon','Exploitation'],
    link: 'https://github.com/Mare123350',
    desc: 'Documented findings, reproduction steps, and mitigations for several OWASP categories.',
    image: '/images/owasp.png'
  },
  {
    title: 'This Portfolio (Express + EJS + Bootstrap)',
    stack: ['Express','EJS','Bootstrap','Render/AWS'],
    link: 'https://github.com/Mare123350',
    desc: 'Templated pages, routes, and Bootstrap UI; deployed on a cloud platform.',
    image: '/images/portfolio.png'
  }
];



router.get('/', function(req, res) {
  res.render('home', { site, pageTitle: 'Home' });
});


router.get('/about', function(req, res) {
  const about = {
    name: 'Mare Okoigun',
    tagline: 'Networking & IT Security student',
    summary:
      'I design secure network architectures and cloud environments, automate hardening, and document risks clearly. Interests include network defense, cloud security, and secure web deployment.',
    highlights: [
      'Segmented VPCs with bastion access and least-privilege security groups',
      'Cisco Packet Tracer labs: VLANs, inter-VLAN routing, STP, DHCP, NAT',
      'Linux hardening (SSH, users, auditing, firewall) — automation with Ansible',
      'IDS/IPS detection engineering (Suricata rules & validation)',
      'Secure deployment of Express apps on Render/AWS'
    ],
    skills: [
      'Routing/Switching','VLANs/STP','Firewalling','IDS/IPS',
      'AWS (VPC, IAM, EC2, ALB)','Linux','Bash/Python',
      'Express/Node','HTML/CSS/Bootstrap','Git/GitHub'
    ]
  };
  res.render('about', { site, pageTitle: 'About', about });
});


router.get('/projects', function(req, res) {
  res.render('projects', { site, pageTitle: 'Projects', projects });
});


router.get('/contact', function(req, res) {
  res.render('contact', { site, pageTitle: 'Contact', status: null });
});

router.post('/contact', function(req, res) {
  const { name, email, message } = req.body || {};
  if (!name || !email || !message) {
    return res.render('contact', { site, pageTitle: 'Contact',
      status: { type: 'danger', text: 'All fields are required.' }});
  }
  res.render('contact', { site, pageTitle: 'Contact',
    status: { type: 'success', text: 'Thanks—your message was received.' }});
});

module.exports = router;

router.get('/projects', (req, res) => {
  res.render('projects', { site, pageTitle: 'Projects', projects });
});
