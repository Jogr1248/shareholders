CREATE TABLE IF NOT EXISTS attendance (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  shareholder_id VARCHAR(50) NOT NULL,
  attendance_date DATE NOT NULL,
  status ENUM('present', 'absent', 'late') NOT NULL DEFAULT 'absent',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY unique_attendance (shareholder_id, attendance_date),
  FOREIGN KEY (shareholder_id) REFERENCES shareholders(shareholder_id)
);