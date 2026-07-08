import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import CountryFlag from 'react-country-flag';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Country {
  country_code: string;
  country_name: string;
  compliance_status: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  country: string;
  countryCode: string;
  phoneNumber: string;
  email: string;
  companyName: string;
  websiteUrl: string;
  paymentSolutionInterest: string;
  referralSource: string;
  agreedToTerms: boolean;
}

interface CountryCodeMap {
  [key: string]: string;
}

// Common country codes (phone prefixes)
const COUNTRY_CODES: CountryCodeMap = {
  'COL': '+57',
  'USA': '+1',
  'MEX': '+52',
  'BRA': '+55',
  'ARG': '+54',
  'CHL': '+56',
  'PER': '+51',
  'ECU': '+593',
  'VEN': '+58',
  'PAN': '+507',
  'CRI': '+506',
  'GTM': '+502',
  'SLV': '+503',
  'HND': '+504',
  'NIC': '+505',
  'DOM': '+1-809',
  'CUB': '+53',
  'JAM': '+1-876',
  'ESP': '+34',
  'MX': '+52',
  'BR': '+55',
  'ARG': '+54',
};

export const RegistrationForm = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    country: 'COL',
    countryCode: '+57',
    phoneNumber: '+57 ',
    email: '',
    companyName: '',
    websiteUrl: '',
    paymentSolutionInterest: '',
    referralSource: '',
    agreedToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [loadingCountries, setLoadingCountries] = useState(true);

  // Fetch supported countries on component mount
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const isDevMode = import.meta.env.DEV;
        const countriesUrl = isDevMode
          ? '/api/bridge/supported-countries'
          : 'https://api.nebulack.com/plixum/bridge/supported-countries';
        const response = await fetch(countriesUrl);
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.countries) {
            setCountries(data.countries);
          }
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Fallback list with all 44 countries from bridge API
        setCountries([
          { country_code: 'COL', country_name: 'Colombia', compliance_status: 'Not High Risk' },
          { country_code: 'USA', country_name: 'United States of America', compliance_status: 'Not High Risk' },
          { country_code: 'BRA', country_name: 'Brazil', compliance_status: 'Not High Risk' },
          { country_code: 'MEX', country_name: 'Mexico', compliance_status: 'Not High Risk' },
          { country_code: 'ARG', country_name: 'Argentina', compliance_status: 'Not High Risk' },
          { country_code: 'CHL', country_name: 'Chile', compliance_status: 'Not High Risk' },
          { country_code: 'PER', country_name: 'Peru', compliance_status: 'Not High Risk' },
          { country_code: 'ECU', country_name: 'Ecuador', compliance_status: 'Not High Risk' },
          { country_code: 'CAN', country_name: 'Canada', compliance_status: 'Not High Risk' },
          { country_code: 'DEU', country_name: 'Germany', compliance_status: 'Not High Risk' },
          { country_code: 'FRA', country_name: 'France', compliance_status: 'Not High Risk' },
          { country_code: 'ESP', country_name: 'Spain', compliance_status: 'Not High Risk' },
          { country_code: 'ITA', country_name: 'Italy', compliance_status: 'Not High Risk' },
          { country_code: 'NLD', country_name: 'Netherlands', compliance_status: 'Not High Risk' },
          { country_code: 'BEL', country_name: 'Belgium', compliance_status: 'Not High Risk' },
          { country_code: 'PRT', country_name: 'Portugal', compliance_status: 'Not High Risk' },
          { country_code: 'AUT', country_name: 'Austria', compliance_status: 'Not High Risk' },
          { country_code: 'FIN', country_name: 'Finland', compliance_status: 'Not High Risk' },
          { country_code: 'SWE', country_name: 'Sweden', compliance_status: 'Not High Risk' },
          { country_code: 'DNK', country_name: 'Denmark', compliance_status: 'Not High Risk' },
          { country_code: 'POL', country_name: 'Poland', compliance_status: 'Not High Risk' },
          { country_code: 'CZE', country_name: 'Czechia', compliance_status: 'Not High Risk' },
          { country_code: 'HUN', country_name: 'Hungary', compliance_status: 'Not High Risk' },
          { country_code: 'ROU', country_name: 'Romania', compliance_status: 'Not High Risk' },
          { country_code: 'BGR', country_name: 'Bulgaria', compliance_status: 'Not High Risk' },
          { country_code: 'GRC', country_name: 'Greece', compliance_status: 'Not High Risk' },
          { country_code: 'IRL', country_name: 'Ireland', compliance_status: 'Not High Risk' },
          { country_code: 'GBR', country_name: 'United Kingdom of Great Britain and Northern Ireland', compliance_status: 'Not High Risk' },
          { country_code: 'CHE', country_name: 'Switzerland', compliance_status: 'Not High Risk' },
          { country_code: 'LUX', country_name: 'Luxembourg', compliance_status: 'Not High Risk' },
          { country_code: 'JPN', country_name: 'Japan', compliance_status: 'Not High Risk' },
          { country_code: 'SGP', country_name: 'Singapore', compliance_status: 'Not High Risk' },
          { country_code: 'HKG', country_name: 'Hong Kong', compliance_status: 'Not High Risk' },
          { country_code: 'IND', country_name: 'India', compliance_status: 'Not High Risk' },
          { country_code: 'IDN', country_name: 'Indonesia', compliance_status: 'Not High Risk' },
          { country_code: 'THA', country_name: 'Thailand', compliance_status: 'Not High Risk' },
          { country_code: 'MYS', country_name: 'Malaysia', compliance_status: 'Not High Risk' },
          { country_code: 'PHL', country_name: 'Philippines', compliance_status: 'Not High Risk' },
          { country_code: 'VNM', country_name: 'Vietnam', compliance_status: 'Not High Risk' },
          { country_code: 'AUS', country_name: 'Australia', compliance_status: 'Not High Risk' },
          { country_code: 'NZL', country_name: 'New Zealand', compliance_status: 'Not High Risk' },
          { country_code: 'ZAF', country_name: 'South Africa', compliance_status: 'Restricted' },
          { country_code: 'EGY', country_name: 'Egypt', compliance_status: 'Not High Risk' },
          { country_code: 'NGA', country_name: 'Nigeria', compliance_status: 'Restricted' },
        ]);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const paymentSolutions = [
    { value: 'local_payments', label: language === 'es' ? 'Pagos locales' : 'Local payments' },
    { value: 'international_payments', label: language === 'es' ? 'Pagos internacionales' : 'International payments' },
    { value: 'both_payments', label: language === 'es' ? 'Pagos locales e internacionales' : 'Both local & international payments' },
    { value: 'digital_assets', label: language === 'es' ? 'Activos digitales' : 'Digital assets' },
    { value: 'digital_accounts', label: language === 'es' ? 'Cuentas digitales' : 'Digital accounts' },
    { value: 'apy_dollar_euro', label: language === 'es' ? 'APY en dólares y euros' : 'APY in dollar & euro' },
  ];

  const referralSources = [
    { value: 'google_search', label: language === 'es' ? 'Búsqueda en Google' : 'Google Search' },
    { value: 'social_media', label: language === 'es' ? 'Redes sociales' : 'Social Media' },
    { value: 'event', label: language === 'es' ? 'Evento' : 'Event' },
    { value: 'referral', label: language === 'es' ? 'Referido' : 'Referral' },
    { value: 'billboard', label: language === 'es' ? 'Vallas Publicitarias' : 'Billboards' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'newsletter', label: language === 'es' ? 'Newsletter' : 'Newsletter' },
    { value: 'podcast', label: language === 'es' ? 'Podcast' : 'Podcast' },
    { value: 'press', label: language === 'es' ? 'Prensa' : 'Press' },
    { value: 'radio', label: language === 'es' ? 'Radio' : 'Radio' },
  ];

  const getCountryCode2Letter = (code3: string) => {
    const map: {[key: string]: string} = {
      'COL': 'CO', 'USA': 'US', 'MEX': 'MX', 'BRA': 'BR', 'ARG': 'AR',
      'CHL': 'CL', 'PER': 'PE', 'ECU': 'EC', 'VEN': 'VE', 'PAN': 'PA',
      'CRI': 'CR', 'GTM': 'GT', 'SLV': 'SV', 'HND': 'HN', 'NIC': 'NI',
      'DOM': 'DO', 'CUB': 'CU', 'JAM': 'JM', 'ESP': 'ES', 'CAN': 'CA',
      'GBR': 'GB', 'DEU': 'DE', 'FRA': 'FR', 'ITA': 'IT', 'PRT': 'PT',
      'NLD': 'NL', 'BEL': 'BE', 'AUT': 'AT', 'FIN': 'FI', 'SWE': 'SE',
      'DNK': 'DK', 'POL': 'PL', 'CZE': 'CZ', 'HUN': 'HU', 'ROU': 'RO',
      'BGR': 'BG', 'GRC': 'GR', 'IRL': 'IE', 'CHE': 'CH', 'LUX': 'LU',
      'JPN': 'JP', 'SGP': 'SG', 'HKG': 'HK', 'IND': 'IN', 'IDN': 'ID',
      'THA': 'TH', 'MYS': 'MY', 'PHL': 'PH', 'VNM': 'VN', 'AUS': 'AU',
      'NZL': 'NZ', 'ZAF': 'ZA', 'EGY': 'EG', 'NGA': 'NG',
    };
    return map[code3] || code3.substring(0, 2);
  };

  const handleCountryChange = (value: string) => {
    // When country changes, update country code and clear phone
    const countryCode = COUNTRY_CODES[value] || '';
    setFormData(prev => ({
      ...prev,
      country: value,
      countryCode: countryCode,
      phoneNumber: countryCode ? `${countryCode} ` : '', // Prepend country code
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }));
    } else if (name === 'phoneNumber') {
      // Don't allow editing the country code prefix
      if (formData.countryCode && value.startsWith(formData.countryCode)) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      } else if (formData.countryCode && !value.startsWith(formData.countryCode)) {
        // Re-add country code if removed
        setFormData(prev => ({
          ...prev,
          [name]: formData.countryCode + ' ' + value.replace(formData.countryCode, '').trim()
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setSubmitMessage('');

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.country || !formData.phoneNumber || !formData.email || 
        !formData.companyName || !formData.websiteUrl || !formData.paymentSolutionInterest || 
        !formData.referralSource || !formData.agreedToTerms) {
      setSubmitError(language === 'es' ? 'Por favor completa todos los campos requeridos.' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        country: formData.country,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        companyName: formData.companyName,
        websiteUrl: formData.websiteUrl,
        paymentSolutionInterest: formData.paymentSolutionInterest,
        referralSource: formData.referralSource,
        agreedToTerms: formData.agreedToTerms,
        timestamp: new Date().toISOString(),
      };

      // Send to backend endpoint
      const isDevMode = import.meta.env.DEV;
      const submitUrl = isDevMode
        ? '/api/contactregistrations'
        : 'https://api.nebulack.com/plixum/contactregistrations';
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error codes
        if (response.status === 409) {
          throw new Error(language === 'es' ? 'Este correo ya está registrado.' : 'This email is already registered.');
        }
        if (response.status === 400) {
          throw new Error(language === 'es' ? 'Por favor verifica los datos ingresados.' : 'Please check your input data.');
        }
        throw new Error(data.message || 'Failed to submit form');
      }

      setSubmitMessage(language === 'es' ? '¡Registro exitoso! Redirigiendo...' : 'Registration successful! Redirecting...');
      
      // Clear form but keep country defaults
      setFormData({
        firstName: '',
        lastName: '',
        country: 'COL',
        countryCode: '+57',
        phoneNumber: '+57 ',
        email: '',
        companyName: '',
        websiteUrl: '',
        paymentSolutionInterest: '',
        referralSource: '',
        agreedToTerms: false,
      });

      // Redirect to booking page after short delay
      setTimeout(() => {
        window.open('https://cal.com/plixum/30min?utm_source=plixum.com&utm_medium=form_submit', '_blank');
      }, 1500);
    } catch (error: any) {
      const errorMessage = error.message || (language === 'es' ? 'Error al enviar el formulario. Por favor intenta de nuevo.' : 'Error submitting form. Please try again.');
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl mx-auto" style={{ gap: 'var(--gap-medium)' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'Nombre*' : 'First Name*'}
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'Apellidos*' : 'Last Name*'}
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            placeholder={language === 'es' ? 'Tus apellidos' : 'Your last name'}
          />
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'País*' : 'Country*'}
          </label>
          <Select 
            value={formData.country} 
            onValueChange={handleCountryChange}
            disabled={loadingCountries}
          >
            {/* Trigger styling: White background for black text as requested */}
            <SelectTrigger className="w-full bg-white text-black border border-white/20 rounded-lg px-4 py-3 h-auto focus:outline-none focus:ring-1 focus:ring-cyan-400 transition hover:bg-gray-100 [&>span]:text-black [&_svg]:text-black">
              <SelectValue placeholder={language === 'es' ? 'Selecciona un país' : 'Select a country'} />
            </SelectTrigger>
            
            {/* Content styling: Dark theme to match 'Payment Solution' select options */}
            <SelectContent className="max-h-[300px] bg-black border-white/20 text-white">
              {loadingCountries ? (
                <SelectItem value="loading" disabled className="text-white/50">
                  {language === 'es' ? 'Cargando países...' : 'Loading countries...'}
                </SelectItem>
              ) : (
                countries.map(country => {
                  const countryCode2 = getCountryCode2Letter(country.country_code);
                  // Determine status color/icon
                  let statusBadge = null;
                  if (country.compliance_status === 'Not High Risk') {
                     statusBadge = <span className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400 ml-auto whitespace-nowrap font-medium">Low Risk</span>;
                  } else if (country.compliance_status === 'High Risk') {
                     statusBadge = <span className="text-xs px-2 py-0.5 rounded bg-red-500/20 text-red-400 ml-auto whitespace-nowrap font-medium">High Risk</span>;
                  } else {
                     statusBadge = <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400 ml-auto whitespace-nowrap font-medium">{country.compliance_status}</span>;
                  }

                  return (
                    <SelectItem 
                      key={country.country_code} 
                      value={country.country_code}
                      textValue={country.country_name}
                      className="focus:bg-white/20 focus:text-white cursor-pointer py-3 text-white"
                    >
                      <div className="flex items-center gap-3 w-full pr-4">
                        <div className="flex-shrink-0 w-[1.5em] h-[1.5em] relative shadow-sm rounded-sm overflow-hidden border border-white/20">
                            <CountryFlag 
                                countryCode={countryCode2} 
                                svg 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0
                                }} 
                            />
                        </div>
                        <span className="font-medium truncate">{country.country_name}</span>
                        {statusBadge}
                      </div>
                    </SelectItem>
                  );
                })
              )}
            </SelectContent>
          </Select>
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'Número de celular*' : 'Phone Number*'}
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            placeholder={language === 'es' ? '+57 300 123 4567' : '+57 300 123 4567'}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'Correo empresarial*' : 'Business Email*'}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            placeholder={language === 'es' ? 'tu@empresa.com' : 'you@company.com'}
          />
        </div>

        {/* Company Name */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'Nombre de la empresa*' : 'Company Name*'}
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            placeholder={language === 'es' ? 'Tu empresa' : 'Your company'}
          />
        </div>

        {/* Website URL */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? 'Sitio web de la empresa*' : 'Company Website*'}
          </label>
          <input
            type="text"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
            onBlur={(e) => {
              const val = e.target.value.trim();
              if (val && !val.startsWith('http://') && !val.startsWith('https://')) {
                setFormData(prev => ({ ...prev, websiteUrl: 'https://' + val }));
              }
            }}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition"
            placeholder="https://empresa.com"
          />
        </div>

        {/* Payment Solution Interest */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? '¿Qué solución de pagos te interesa explorar?*' : 'What payment solution interests you?*'}
          </label>
          <select
            name="paymentSolutionInterest"
            value={formData.paymentSolutionInterest}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-black">
              {language === 'es' ? 'Selecciona una opción' : 'Select an option'}
            </option>
            {paymentSolutions.map(option => (
              <option key={option.value} value={option.value} className="bg-black">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Referral Source */}
        <div className="flex flex-col gap-2">
          <label className="text-white font-semibold" style={{ fontSize: 'var(--paragraph-small)' }}>
            {language === 'es' ? '¿Cómo nos conociste?*' : 'How did you hear about us?*'}
          </label>
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 transition appearance-none cursor-pointer"
          >
            <option value="" disabled className="bg-black">
              {language === 'es' ? 'Selecciona una opción' : 'Select an option'}
            </option>
            {referralSources.map(option => (
              <option key={option.value} value={option.value} className="bg-black">
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 mt-6">
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
          className="mt-1 w-5 h-5 rounded border border-white/20 bg-white/10 cursor-pointer accent-cyan-400"
        />
        <label className="text-white font-bold text-sm cursor-pointer">
          {language === 'es' ? (
            <>
              Acepto los{' '}
              <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                términos y condiciones
              </a>{' '}
              y la{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                política de privacidad
              </a>*
            </>
          ) : (
            <>
              I agree to the{' '}
              <a href="/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                terms and conditions
              </a>{' '}
              and{' '}
              <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">
                privacy policy
              </a>*
            </>
          )}
        </label>
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
          {submitError}
        </div>
      )}

      {/* Success Message */}
      {submitMessage && (
        <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-sm">
          {submitMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full mt-6 bg-gradient-to-r from-cyan-400 to-green-400 text-black font-semibold rounded-lg py-3 hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
        style={{ fontSize: 'var(--button-medium)' }}
      >
        {isSubmitting 
          ? (language === 'es' ? 'Enviando...' : 'Submitting...') 
          : (language === 'es' ? '📅 Agendar llamada' : '📅 Book a call')}
      </button>
    </form>
  );
};
