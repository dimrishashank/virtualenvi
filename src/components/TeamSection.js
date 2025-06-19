import React from 'react';
import Arushi from '../assets/Arushi2.png';
import Vinay from '../assets/Vinay.png';
import Akshit from '../assets/Akshit.png';

function TeamSection() {
  const teamMembers = [
    {
      name: 'AARUSHI',
      role: 'Founder & CEO',
      image: Arushi,
      bio: 'Aarushi is a DevSecOps enthusiast and XR healthcare innovator, currently leading Mayatopia Private Limited to build immersive VR solutions for anxiety and depression. With a background in cloud systems, UI/UX, and mental health-focused technology, she blends empathetic design with cutting-edge XR.',
    },
    {
      name: 'VINAY K',
      role: 'Co Founder & Director',
      image: Vinay,
      bio: 'Viney is a cybersecurity consultant and researcher with deep expertise in digital forensics, AI-driven threat modeling, and blockchain-integrated risk management. As a co-founder of Mayatopia, he ensures the platform remains ethically secure and technically resilient for users managing anxiety and depression through XR.',
    },
    {
      name: 'AKSHIT BHURANI',
      role: 'Co Founder & Director',
      image: Akshit,
      bio: 'Akshit is a DevSecOps and backend development enthusiast co-leading Mayatopia\'s vision of transforming mental health through immersive XR technology. With hands-on experience in AWS, Python, and startup strategy, he brings technical leadership and a deep passion for digital wellness.',
    }
  ];

  return (
    <section className="meet-team-section">
      <h2>Meet the Team</h2>
      <p className="team-description">
        At the heart of Mayatopia is a passionate team of innovators, creators, and 
        technologists united by a bold vision—to shape the future of immersive digital 
        experiences through VirtualEnvi.
      </p>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member-card">
            <div className="member-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="member-info">
              <h3>{member.role}</h3>
              <h4>{member.name}</h4>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;