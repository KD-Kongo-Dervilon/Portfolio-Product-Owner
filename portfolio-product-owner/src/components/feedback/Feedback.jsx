// feedback/FeedbackForm.js

import React, { useState } from 'react';

const FeedbackForm = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Commentaire pour le backend pour le gérer localement
    console.log('Comment submitted:', comment);
    setComment('');
    // La logique pour enregistrer le commentaire
    alert('Merci pour votre avis !');
  };

  return (
    <div className="feedback-form">
      <h2>Laissez votre avis sur mon portfolio</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          cols="50"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Écrivez votre avis ici..."
          required
        ></textarea>
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
