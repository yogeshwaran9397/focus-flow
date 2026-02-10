/**
 * Calculate priority score for a task
 * @param {Object} task - Task object
 * @returns {number} Priority score
 */
export const calculatePriority = (task) => {
  if (task.completed) return 0;
  
  const priorityMap = {
    High: 3,
    Medium: 2,
    Low: 1
  };
  
  return priorityMap[task.priority] || 1;
};

/**
 * Get priority color based on priority level
 * @param {string} priority - Priority level
 * @returns {string} Color code
 */
export const getPriorityColor = (priority) => {
  const colorMap = {
    High: "#ef4444",
    Medium: "#f59e0b",
    Low: "#10b981"
  };
  
  return colorMap[priority] || "#6b7280";
};
