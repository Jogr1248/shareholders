CREATE TABLE deposits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  shareholder_id VARCHAR(255) NOT NULL,
  deposit_date DATE NULL,
  amount DOUBLE NOT NULL DEFAULT 0,
  payment_method VARCHAR(100) NULL,
  receipt_number VARCHAR(255) NULL,
  notes TEXT NULL,
  created_by VARCHAR(36) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
