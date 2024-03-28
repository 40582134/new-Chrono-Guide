import React from "react";
import ReactModal from "react-modal";
import SkillDetails from "./SkillDetails";

const SkillModal = ({ isOpen, onRequestClose, selectedSkill }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Skill Details"
      className="skill-modal"
      overlayClassName="skill-modal-overlay"
    >
      {selectedSkill && (
        <div className="skill-modal-content">
          <SkillDetails
            selectedSkill={selectedSkill}
            activeSynergies={[]}
            handleSynergyClick={() => {}}
            hoveredTerm=""
            setHoveredTerm={() => {}}
            renderCastEffect={() => {}}
          />
          <button onClick={onRequestClose}>Close</button>
        </div>
      )}
    </ReactModal>
  );
};

export default SkillModal;
