const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-center text-gray-400">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} CRMcv. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
