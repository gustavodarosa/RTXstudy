// Entry point of the RTX simulation application
import { RTXSimulation } from './simulation/rtx.js';

// Initialize the simulation
const simulation = new RTXSimulation();

// Set up event listeners or configurations if necessary
document.addEventListener('DOMContentLoaded', () => {
    simulation.startSimulation();
});

// Export the simulation instance for potential use in other modules
export default simulation;