"use client"
import React, { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [window.location.pathname]);

  return null;
}

export default ScrollToTop;
