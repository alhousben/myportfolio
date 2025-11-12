import React, { useState, useEffect } from 'react';
import TextSwitcher from './TextSwitcher';
import emailjs from '@emailjs/browser';

import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Brain, Calendar, Award, Send, Menu, X, ChevronUp } from 'lucide-react';



const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('accueil');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    objet: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
      
      const sections = ['accueil', 'projets', 'competences', 'parcours', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const [showMessage, setShowMessage] = useState(false);
  const handleFormSubmit = (e) => {
  e.preventDefault();

  if (formData.nom && formData.email && formData.objet && formData.message) {
    console.log("Données envoyées à EmailJS :", formData);
    emailjs.send(
      'service_ewn87bs',
      'template_trrx785',
      formData, // On envoie directement l'objet formData
      'cLTD1PoO85NLBoMtv'
    )
    .then(() => {
      //alert('Message envoyé ! Je vous répondrai bientôt.');
      setShowMessage(true);
      setFormData({ nom: '', email: '', objet: '', message: '' });

        // Ferme automatiquement après 4s
        setTimeout(() => setShowMessage(false), 5000);
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert("Une erreur s'est produite. Essayez encore.");
    });
  } else {
    alert('Veuillez remplir tous les champs.');
  }
};



  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /*const projets = [
    {
      titre: "E-commerce React",
      description: "Application e-commerce complète avec panier, paiement et gestion d'inventaire",
      outils: ["React", "Node.js", "MongoDB", "Stripe"],
      lien: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400"
    },
    {
      titre: "Dashboard Analytics",
      description: "Tableau de bord interactif pour visualiser des données en temps réel",
      outils: ["React", "D3.js", "Express", "PostgreSQL"],
      lien: "#",
      github: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400"
    },
    {
      titre: "",
      description: "",
      outils: [],
      lien: "#",
      github: "#",
      image: ""
    }
  ];*/

  const competences = {
    langages: [
      { nom: "HTML5", niveau: 95 },
      { nom: "CSS3", niveau: 90 },
      { nom: "JavaScript", niveau: 88 },
      { nom: "Java", niveau: 82 },
      { nom: "Python", niveau: 90 },
      { nom: "Php", niveau: 75 },
      { nom: "MySql", niveau: 75 }
    ],
    frameworks: [
      { nom: "React", niveau: 90 },
      { nom: "Next.js", niveau: 85 },
      { nom: "Tailwind CSS", niveau: 92 },
      { nom: "Node.js", niveau: 80 },
      { nom: "Express.js", niveau: 78 }
    ],
    outils: [
      { nom: "Git", niveau: 88 },
      { nom: "VS Code", niveau: 95 },
      { nom: "Figma", niveau: 55 }
      
    ]
  };

  const parcours = [
    {
      type: "experience",
      titre: "Développeur Web (Stage)",
      lieu: "Conseil Informatique Réunion",
      periode: "Juillet 2025",
      description: "Développement et mis à jour de site web modernes, "
    },

    {
      type: "experience",
      titre: "Tuteur de sicences Informatiques",
      lieu: "Université de la Réunion",
      periode: "Octobre 2025 - Aujourd'hui",
      description: "Mes Principales missions : Soutenir les étudiants dans l'apprentissage des concepts informatiques, Aider à la résolution d'exercices pratiques (programmation, bases de données, mathématique pour l'informatique, l'algèbre, Structure de données, etc), Fournir des explications claires sur des sujets, Préparer et animer des séances de révision."
    },

    {
      type: "experience",
      titre: "Tuteur Etudiant Tice",
      lieu: "Université de la Réunion",
      periode: "Octobre 2025 - Aujourd'hui",
      description: "Mes Principales missions : Accompagner les étudiants dans l'utilisation des outils Tice(ENT, Moodle, accès Wi-fi, gestion des mots de passe) en présentiel et à distance, Traiter les demandes de support via le système de tickets et alimenter les bases de FAQ, Rediriger les demandes complexes vers les services compétents, Veiller au bon usage des espaces et matériels informatiques, Proposer des améliorations des procédures de tutorat."
    },

    {
      type: "formation",
      titre: "Licence en Informatique",
      lieu: "Université de La Réunion",
      periode: "2023 - 2026",
      description: "Spécialisation en développement web, analyse de données, Réseaux, Science de données, base de données, etc"
    },
    {
      type: "Attestation de Suivi",
      titre: "MOOC SecNumAcadémie – Sensibilisation à la cybersécurité",
      lieu: "ANSI",
      periode: "Mai 2025",
      description: "Attestation obtenue à l’issue d’une formation en ligne gratuite proposée par l’ANSSI. Le cours couvre les bases de la cybersécurité : sécurité des systèmes d’information, gestion des mots de passe, navigation sécurisée, protection du poste de travail et des données personnelles."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Menu Desktop */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'projets', label: 'Projets' },
                { id: 'competences', label: 'Compétences' },
                { id: 'parcours', label: 'Parcours' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.id ? 'text-blue-400' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Menu Mobile */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'projets', label: 'Projets' },
                { id: 'competences', label: 'Compétences' },
                { id: 'parcours', label: 'Parcours' },
                { id: 'contact', label: 'Contact' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Section Accueil */}
      <section id="accueil" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <Code size={60} className="text-blue-400" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Said Hassani ALHOUSSEINE BEN
          </h1>
          
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Développeur Full-Stack passionné par la création d'expériences web modernes et performantes
          </p> */}
          <TextSwitcher /> <br></br>

          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-300">
              React & Next.js
            </span>
            <span className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 text-purple-300">
              Node.js & Express
            </span>
            <span className="px-4 py-2 bg-pink-500/20 rounded-full border border-pink-500/30 text-pink-300">
              UI/UX Design
            </span>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/alhousben" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/said-hassani-alhousseine-ben/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Section Projets */}
     {/* <section id="projets" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            💼 Mes Projets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projets.map((projet, index) => (
              <div key={index} className="group relative bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-600/20 relative overflow-hidden">
                  <img 
                    src={projet.image} 
                    alt={projet.titre}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-blue-300">{projet.titre}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{projet.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.outils.map((outil, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">
                        {outil}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a href={projet.lien} className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors">
                      <ExternalLink size={16} />
                      <span className="text-sm">Voir le projet</span>
                    </a>
                    <a href={projet.github} className="flex items-center gap-2 px-4 py-2 bg-gray-500/20 rounded-lg hover:bg-gray-500/30 transition-colors">
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Section Compétences */}
      <section id="competences" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            🧠 Compétences
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(competences).map(([categorie, skills]) => (
              <div key={categorie} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 capitalize flex items-center gap-3">
                  {categorie === 'langages' && <Code className="text-blue-400" size={24} />}
                  {categorie === 'frameworks' && <Database className="text-purple-400" size={24} />}
                  {categorie === 'outils' && <Palette className="text-pink-400" size={24} />}
                  {categorie}
                </h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.nom}</span>
                        <span className="text-blue-400">{skill.niveau}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.niveau}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Parcours */}
      <section id="parcours" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            📃 Mon Parcours
          </h2>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>
            
            {parcours.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 ml-12 md:ml-0">
                    <div className="flex items-center gap-3 mb-3">
                      {item.type === 'experience' && <Brain className="text-blue-400" size={20} />}
                      {item.type === 'formation' && <Calendar className="text-purple-400" size={20} />}
                      {item.type === 'certification' && <Award className="text-pink-400" size={20} />}
                      <span className="text-sm text-gray-400 uppercase tracking-wider">{item.type}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-blue-300">{item.titre}</h3>
                    <p className="text-purple-300 mb-2">{item.lieu}</p>
                    <p className="text-gray-400 text-sm mb-3">{item.periode}</p>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            📞 Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-blue-300">Envoyez-moi un message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2">Objet</label>
                  <input
                    type="text"
                    name="objet"
                    value={formData.objet}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="l'objectif du message"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                
                <button
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Envoyer le message
                </button>
              </div>
              {/* Petit rectangle de confirmation */}
              {showMessage && (
        <div className="fixed bottom-5 right-5 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white bg-gradient-to-r from-purple-600 to-blue-800 animate-fade-in">
          <span>Message envoyé ! Je vous répondrai bientôt.</span>
          <button
            onClick={() => setShowMessage(false)}
            className="text-white text-lg font-bold hover:text-gray-200"
          >
            ✖
          </button>
        </div>
      )}
            </div>

            
            {/* Informations de contact */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Informations de contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" size={20} />
                    <span>saidhassanialhousseineben@gmail.com</span>
                  </div>
               {/*   <div className="flex items-center gap-3">
                    <Phone className="text-purple-400" size={20} />
                    <span>+262</span>
                  </div> */}
                  <div className="flex items-center gap-3">
                    <MapPin className="text-pink-400" size={20} />
                    <span>Saint Denis, La Réunion</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-300">Réseaux sociaux</h3>
                
                <div className="flex gap-4">
                  <a href="https://github.com/alhousben" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/said-hassani-alhousseine-ben/" className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl p-6 border border-blue-500/30">
                <h3 className="text-xl font-bold mb-3 text-blue-300">Disponibilité</h3>
                <p className="text-gray-300">
                  Actuellement ouvert aux nouvelles opportunités et projets freelance. 
                  N'hésitez pas à me contacter pour discuter de votre projet !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bouton retour en haut */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-40"
        >
          <ChevronUp size={24} />
        </button>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 bg-black/40 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Said Hassani ALHOUSSEINE BEN. Tous droits réservés.</p>
          <p className="mt-2 text-sm">Développé avec React et beaucoup de ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;