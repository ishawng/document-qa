import styles from '../styles/FileUploader.module.css';

export default function FileUploader({ handleChange, name, required }) {
  const _handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        alert('Only PDF files are allowed.');
        return;
      }
      if (file.size > 10000000) {
        alert('File size must be under 10MB.');
        return;
      }
      handleChange(file);
    }
  };

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.upload}>
        Upload a file
      </label>
      <input
        type='file'
        onChange={_handleChange}
        required={required}
        id={name}
      />
    </div>
  );
}