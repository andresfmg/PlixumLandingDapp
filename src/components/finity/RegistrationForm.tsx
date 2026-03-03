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
        const response = await fetch('https://api.nebulack.com/plixum/bridge/supported-countries');
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.countries) {
            setCountries(data.countries);
          }
        }
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoadingCountries(false);
      }
    };

    fetchCountries();
  }, []);

  const paymentSolutions = [
    { value: 'local_payments', label: language === 'es' ? 'Pagos locales' : 'Local payments' },
    { value: 'international_payments', label: language === 'es' ? 'Pagos internacionales' : 'International payments' },
    { value: 'both_payments', label: language === 'es' ? 'Ambos pagos' : 'Both payments' },
    { value: 'digital_assets', label: language === 'es' ? 'Activos Digitales AutoCustodiados' : 'Self-Custodial Digital Assets' },
    { value: 'digital_accounts', label: language === 'es' ? 'Cuentas Digitales en USA/EUR/BRA/MXN/COL' : 'Digital Accounts in USA/EUR/BRA/MXN/COL' },
    { value: 'apy_dollar_euro', label: language === 'es' ? 'APY en dólares/Euros' : 'APY in Dollars/Euros' },
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
    // Map of 3-letter codes to 2-letter codes for react-country-flag
    const map: {[key: string]: string} = {
      'COL': 'CO', 'USA': 'US', 'MEX': 'MX', 'BRA': 'BR', 'ARG': 'AR',
      'CHL': 'CL', 'PER': 'PE', 'ECU': 'EC', 'VEN': 'VE', 'PAN': 'PA',
      'CRI': 'CR', 'GTM': 'GT', 'SLV': 'SV', 'HND': 'HN', 'NIC': 'NI',
      'DOM': 'DO', 'CUB': 'CU', 'JAM': 'JM', 'ESP': 'ES', 'CAN': 'CA',
      'GBR': 'GB', 'DEU': 'DE', 'FRA': 'FR', 'ITA': 'IT', 'PRT': 'PT'
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
        // country: formData.country, // Not required by backend
        // countryCode: formData.countryCode, // Not required by backend
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
      const response = await fetch('https://api.nebulack.com/plixum/contactregistrations', {
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

      setSubmitMessage(language === 'es' ? '¡Registro exitoso! Nos pondremos en contacto pronto.' : 'Registration submitted successfully! We\'ll contact you soon.');
      
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
            type="url"
            name="websiteUrl"
            value={formData.websiteUrl}
            onChange={handleChange}
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
          {language === 'es' 
            ? 'Acepto los términos y condiciones y la política de privacidad*' 
            : 'I agree to the terms and conditions and privacy policy*'}
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
          : (language === 'es' ? 'Enviar' : 'Submit')}
      </button>
    </form>
  );
};
